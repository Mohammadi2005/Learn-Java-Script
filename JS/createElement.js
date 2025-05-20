var para = document.createElement("p");
var node = document.createTextNode("this is a new P tag");

para.appendChild(node);

var Div = document.getElementById("div1");
Div.appendChild(para);

////////////////////////////////

var para1 = document.createElement("p");
var node1 = document.createTextNode("this add to befor Hello");
var p1 = document.getElementById("p1");

para1.appendChild(node1);

Div.insertBefore(para1, p1);

