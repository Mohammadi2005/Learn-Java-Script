// part 2: function

function hello(){
    alert("hello function is runing");
}

function me(){
    return "I am amir hossein";
}

function Sum(x, y){
    return x + y;
}

var funMe = document.getElementById("runMe");
funMe.innerHTML = me();

var funSum = document.getElementById("runSum");
funSum.innerHTML = Sum(4, 6);




