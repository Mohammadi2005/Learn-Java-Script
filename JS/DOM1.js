function DOMfunc() {
    var xhttp;

    if (window.XMLHttpRequest) {
        xhttp = new XMLHttpRequest();
    }
    else {
        xhttp = new ActiveXObject('Microsoft.XMLHTTP');
    }

    xhttp.open("GET", "AjaxeInfo.txt", true);
    xhttp.onreadystatechange = function () {
        var getData = document.getElementById("updata");
        if (xhttp.readyState === 4 && xhttp.status === 200) {
            console.log(xhttp);
            getData.innerHTML = xhttp.responseText;
        }
        else {
            getData.innerHTML = "error";
        }
    }
    xhttp.send();
}
