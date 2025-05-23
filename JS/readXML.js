var xmlData;
if (window.XMLHttpRequest) {
    xmlData = new XMLHttpRequest();
}
else {
    xmlData = new ActiveXObject("Microsoft.XMLHTTP");
}
xmlData.open("GET", "readXML.xml", true);
xmlData.onreadystatechange = function () {
    console.log("ooi9");
    if (xmlData.status === 200 && xmlData.readyState === 4){
        var items = xmlData.responseXML.getElementsByTagName("author");
        var output = "<ul>";
        for (var i = 0; i < items.length; i++){
            output += "<li>" + items[i].firstChild.nodeValue +"</li>";
        }
        output += "</ul>";
        document.getElementById("updata").innerHTML = output;
    }
}
xmlData.send();


