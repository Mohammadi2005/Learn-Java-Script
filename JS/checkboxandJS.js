var checks = document.querySelector("input[name=myRadio]");

var js = document.getElementById("js");

for (var i = 0; i < checks.length; i++) {
    js.innerHTML += checks[i].name + "<br/>";
    js.innerHTML += checks[i].id + "<br/>";
    js.innerHTML += checks[i].checked + "<br/><br/>";
}

