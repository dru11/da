var i,i2,myNodeList=document.getElementsByTagName("LI");for(i=0;i<myNodeList.length;i++){var span=document.createElement("SPAN"),txt=document.createTextNode("×");span.className="close",span.appendChild(txt),myNodeList[i].appendChild(span)}for(i2=0;i2<myNodeList.length;i2++){span=document.createElement("SPAN2");txt=document.createTextNode("Date");span.className="date",span.appendChild(txt),myNodeList[i2].appendChild(span)}var close=document.getElementsByClassName("close");for(i=0;i<close.length;i++)close[i].onclick=function(){this.parentElement.style.display="none"};var list=document.querySelector("ul");function newElement(){var e=document.createElement("li"),t=document.getElementById("myInput").value,n=document.createTextNode(t);e.appendChild(n),""===t?alert("You must write something!"):document.getElementById("myUL").appendChild(e),document.getElementById("myInput").value="";var a=document.createElement("SPAN"),l=document.createTextNode("×");a.className="close",a.appendChild(l),e.appendChild(a);for(var d=0;d<close.length;d++)close[d].onclick=function(){this.parentElement.style.display="none"}}list.addEventListener("click",function(e){"LI"===e.target.tagName&&e.target.classList.toggle("checked")},!1);