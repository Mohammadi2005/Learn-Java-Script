var key = document.getElementById("key");
var text = document.getElementById("text");


key.addEventListener("click", Clicked);
key.addEventListener("mouseover", Over);
key.addEventListener("mouseout", Out);


function Clicked(){
    text.innerHTML += "Clicked <br/>";
}
function Over(){
    text.innerHTML += "Over <br/>";
}
function Out(){
    text.innerHTML += "Out <br/>";
}