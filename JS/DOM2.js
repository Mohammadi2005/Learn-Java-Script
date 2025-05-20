function DOMfunc() {
    var request;

    if (window.XMLHttpRequest) {
        request = new XMLHttpRequest();
    }
    else {
        request = new ActiveXObject('Microsoft.XMLHTTP');
    }
    request.open("GET", "AjaxeInfo.txt", true);
    request.onreadystatechange = function () {
        var firstList = document.getElementsByTagName("ul")[0].getElementsByTagName("li");
        var lastList = document.getElementsByTagName('ul')[1].getElementsByTagName('li');
        if (request.status === 200 && request.readyState === 4) {
            for (var i = 0; i < firstList.length; i++) {
                firstList[i].innerHTML = request.responseText;
            }
            lastList[3].innerHTML = request.responseText;
        }
    }

    request.send();
}


