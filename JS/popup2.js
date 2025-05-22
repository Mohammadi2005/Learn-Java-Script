function myFunc(){

    var res = document.getElementById("result");
    var name = prompt("please enter your name : ");
    if(name == null){
        res.innerHTML = "User Cancelled The Promt !";
    }
    else {
        res.innerHTML = "Hello " + name;
    }
}