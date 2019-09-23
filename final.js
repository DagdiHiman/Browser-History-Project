var close = document.getElementsByClassName("close");
var i;

// Create a new list item when clicking on the "Add" button
function newElement() {
    var now = new Date();
    var d=now.getDate()+ "/" +now.getMonth()+ "/ " + now.getFullYear()+" "+now.getHours()+":"+now.getMinutes()+":"+now.getSeconds()+" ";
    var inputValue = document.getElementById("myInput").value;
    /*var li = document.createElement("tr");
    var inputValue = document.getElementById("myInput").value;
    var t = document.createTextNode(inputValue);

    var dat=document.createTextNode(d);

    li.appendChild(dat);
    li.appendChild(t);
    */


    if (inputValue === '') {
        alert("You must write something!");

        //document.getElementById("myspace").innerHTML = "Timestamp is " +localStorage.getItem('r.date')+"Url is "+localStorage.getItem('r.url');
    } else {
        //document.getElementById("myUL").appendChild(li);
        // Find a <table> element with id="myTable":
        var table = document.getElementById("myUl");

// Create an empty <tr> element and add it to the 1st position of the table:
        var row = table.insertRow(0);

// Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);

// Add some text to the new cells:
        cell1.innerHTML = d;
        cell2.innerHTML = inputValue;
        localStorage.setItem('r.date', d);
        localStorage.setItem('r.url',inputValue);
    }
    document.getElementById("myInput").value = "";

    // Create a "close" button and append it to each list item
    var button = document.createElement("button");
    var txt = document.createTextNode("\u00D7");
    button.className = "close";
    button.appendChild(txt);
    li.appendChild(button);


    // Click on a close button to hide the current list item
    for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }
    window.open(inputValue);
}
function my(){
    var now = new Date();
    var dtString = now.getDate()+ "/" +now.getMonth()+ "/ " + now.getFullYear()+" "+now.getHours()+":"+now.getMinutes()+":"+now.getSeconds()+"\t ";
    //document.getElementById("demo"). innerHTML = dtString;
    return dtString;
}
