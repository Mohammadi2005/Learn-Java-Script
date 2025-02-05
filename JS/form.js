function MyFunc() {
    let name = document.forms["myForm"]["fname"].value;

    if (name == "") {
        return false;
    }
    document.forms["myForm"]["fname"].value = "";
    return true;
}

function MyFunc2() {
    let fnam = document.getElementById("fname").value;
    let message = document.getElementById("result");

    //fnam = "amir";
    if (fnam == "amir" || fnam == "ali") {
        message.innerHTML = "name is Ok";
        message.style.color = "green";
    }
    else {
        message.innerHTML = "name is False";
        message.style.color = "red";
    }
}