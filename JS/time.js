function myFunc(){
    alert("this displayed text 3 second after click on key try it, with help setTimeout function.")
}

let clock = document.getElementById("clock");

var myTimer = setInterval(Clock, 1000);

function Clock(){
    var d = new Date();
    clock.innerHTML = d.toLocaleTimeString();
};


