//console.log(data)

// Submit Button handler
function handleClear() 
{
    Plotly.d3.event.preventDefault();
    
    var $date = document.getElementById("date");
    var $city = document.getElementById("city");
    var $state = document.getElementById("state");
    var $country= document.getElementById("country");
    var $comment = document.getElementById("comment");
    var $shape = document.getElementById("shape");
    var $minutes = document.getElementById("minutes"); 
   
    $date.value = " " ;
    $city.value = " ";
    $state.value = " ";
    $country.value = " ";
    $comment.value = " ";
    $shape.value = " ";
    $minutes.value = " ";
    
    // Create a heading element w/ document.createElement
    var success_message = document.querySelector("#success_message");
    success_message.innerHTML = " ";
    success_message.appendChild(success_message);
}


// Submit Button handler
function handleSubmit() 
{
    Plotly.d3.event.preventDefault();
    
    var $date = document.querySelector("#date").value.trim();
    var $city = document.querySelector("#city").value.trim();
    var $state = document.querySelector("#state").value.trim();
    var $country= document.querySelector("#country").value.trim();
    var $comment = document.querySelector("#comment").value.trim();
    var $shape = document.querySelector("#shape").value.trim();
    var $minutes = document.querySelector("#minutes").value.trim();
    
    if ($date == '')
    {
        alert("Please Enter date")
    }
    else if ($city == '')
    {
        alert("Please Enter City")
    }
    else if($state == '')
    {
        alert("Please Enter State")
    }
    else if($country == '')
    {
        alert("Please Enter Country")
    }
    else if($shape == '')
    {
        alert("Please Enter Shape")
    }
    else if($minutes == '')
    {
        alert("Please Enter Minutes")
    }
    else if($comment == '')
    {
        alert("Please Enter Comment")
    }
    
var result = {}

result.datetime = $date;
result.city = $city;
result.state = $state;
result.country = $country;
result.shape = $shape;
result.minutes = $minutes;
result.comments = $comment;
    

data.push(result)
var result = {}


// Create a heading element w/ document.createElement
var success_message = document.querySelector("#success_message");
success_message.innerHTML = "Finding Successfully Submitted"
success_message.appendChild(success_message);

    $date.value = " " ;
    $city.value = " ";
    $state.value = " ";
    $country.value = " ";
    $comment.value = " ";
    $shape.value = " ";
    $minutes.value = " ";


}

function display_table()
{
    var tbl = document.querySelector("#table-body");
    console.log(tbl)
    
    for (i = 0; i < data.length; i++) 
    {
        var row = document.createElement("tr");
        
            var cell = document.createElement("td");
                var cellText = document.createTextNode(data[i].datetime);
                cell.appendChild(cellText);
                row.appendChild(cell);
        
        var cell = document.createElement("td");
                var cellText = document.createTextNode(data[i].city);
                cell.appendChild(cellText);
                row.appendChild(cell);
        
        var cell = document.createElement("td");
                var cellText = document.createTextNode(data[i].state);
                cell.appendChild(cellText);
                row.appendChild(cell);
        
        var cell = document.createElement("td");
                var cellText = document.createTextNode(data[i].country);
                cell.appendChild(cellText);
                row.appendChild(cell);
        
        var cell = document.createElement("td");
                var cellText = document.createTextNode(data[i].shape);
                cell.appendChild(cellText);
                row.appendChild(cell);
        
        var cell = document.createElement("td");
                var cellText = document.createTextNode(data[i].durationMinutes);
                cell.appendChild(cellText);
                row.appendChild(cell);
        
        var cell = document.createElement("td");
                var cellText = document.createTextNode(data[i].comments);
                cell.appendChild(cellText);
                row.appendChild(cell);
        
        
        tbl.appendChild(row);
    }
}

function search() 
{
  var input, filter, table, tr, td, i;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[1];
    if (td) {
      if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }       
  }
}

Plotly.d3.select("#submit").on("click", handleSubmit);
Plotly.d3.select("#clear").on("click", handleClear);

display_table()