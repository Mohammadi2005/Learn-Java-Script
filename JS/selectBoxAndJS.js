var options = document.getElementById("select");
var listOp = document.getElementById("listOp");
var sel = document.getElementById("selected");

for (var i = 0; i < options.length; i++){
    listOp.innerHTML += options[i].innerHTML + "<br/>";
}

sel.innerHTML += options.value;

function selectByJS(click){

    console.log(click.innerHTML);
    switch (click.innerHTML){
        case ("python") :
            options.value = "PY";
            break;
        case ("C++") :
            options.value = "CPP";
            break;
    }
}