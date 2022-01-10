
// Create a "close" button and append it to each list item
var myNodeList = document.getElementsByTagName('LI');
var i;
for (i = 0; i < myNodeList.length; i++) {
  var span = document.createElement('SPAN');
  var txt = document.createTextNode('\u00D7');
  span.className = 'close';
  span.appendChild(txt);
  myNodeList[i].appendChild(span);
  }

//Place date items
var i2;
  for (i2 = 0; i2 < myNodeList.length; i2++) {
    span = document.createElement('SPAN2');
    var txt = document.createTextNode('Date');
    span.className = 'date';
    span.appendChild(txt);
    myNodeList[i2].appendChild(span);
    }

/*Replace 'Date' with actual date format
var i3;
  for (i = 0; i < myNodeList.length; i++) {
    span = document.createElement('SPAN2');
    var txt = document.createTextNode('Date');
    span.className = 'date';
    span.appendChild(txt);
    myNodeList[i2].appendChild(span);
  }*/3


// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
 i;
for ( i = 0; i < close.length; i++) {
  close[i].onclick = function( ){
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
ev.target.classList.toggle('checked');
  }
},false);



// Create a new list item when clicking on the "Add" button
function  newElement() {
  var li = document.createElement('li');
  var inputValue = document.getElementById('myInput').value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '')  {
    alert("You must write something!");
  }else {
    document.getElementById("myUL").appendChild(li);
}
document.getElementById("myInput").value = "";

    var span = document.createElement('SPAN');
    var txt = document.createTextNode('\u00D7');
    span.className = 'close';
    span.appendChild(txt);
    li.appendChild(span);

    for (var i = 0; i < close.length; i++) {
      close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = 'none';
      }
    }
  }
