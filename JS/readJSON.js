function showJson() {

    var JSONData;
    if (window.XMLHttpRequest) {
        JSONData = new XMLHttpRequest();
    }
    else {
        JSONData = new ActiveXObject("Microsoft.XMLHTTP");
    }
    JSONData.open("GET", "readJSON.json", true);

    JSONData.onreadystatechange = function () {

        if (JSONData.status === 200 && JSONData.readyState === 4) {

            var items = JSON.parse(JSONData.responseText);
            console.log(items);
            var output = "<ul>";
            for (var key in items) {
                output += "<li>" + items[key].name + "</li>";
            }
            output += "</ul>";
            document.getElementById("updata").innerHTML = output;
        }
    }
    JSONData.send();



}