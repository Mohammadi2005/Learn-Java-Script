// port 4 : operator

var oper1 = document.getElementById('oper1');
var oper2 = document.getElementById('oper2');
var oper3 = document.getElementById('oper3');
var oper4 = document.getElementById('oper4');
var oper5 = document.getElementById('oper5');
var oper6 = document.getElementById('oper6');
var oper7 = document.getElementById('oper7');

var x = 10, y = 15;

document.write("X is : " + x + "<br/>");
document.write("Y is : " + y + "<br/>");
document.write("<br/>");
document.write("x + y = <br/>");
document.write("x - y = <br/>");
document.write("x * y = <br/>");
document.write("x / y = <br/>");
document.write("x % y = <br/>");
document.write("++x = <br/>");
document.write("--y = <br/>");

oper1.innerHTML=x + y;
document.write("<br/>");

oper2.innerHTML=x - y;
document.write("<br/>");

oper3.innerHTML=x * y;
document.write("<br/>");

oper4.innerHTML=x / y;
document.write("<br/>");

oper5.innerHTML=x % y;
document.write("<br/>");

oper6.innerHTML=++x;
document.write("<br/>");

oper7.innerHTML=--y;
document.write("<br/>");
