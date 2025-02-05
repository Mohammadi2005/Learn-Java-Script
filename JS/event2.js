function changeText(id){
    id.innerHTML = "you Clicked on me and my text changed !!!!!!";
}

function ShowTime(){
    var time = document.getElementById("p2");
    time.innerHTML = Date();
}

function loadBody(){
    alert("the page was loaded");
}

function Over(obj){
    obj.style = "background-color: antiquewhite;";
}

function Out(obj){
    obj.style = "background-color: indianred;";
}

function Up(obj){
    obj.style.backgroundColor = "red";
}

function Down(obj){
    obj.style.backgroundColor = "black";
}
