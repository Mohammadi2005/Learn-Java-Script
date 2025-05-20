var Wid = document.getElementById("wid");
var Hei = document.getElementById("hei");
var Loc = document.getElementById("loc");
var Por = document.getElementById("por");

Wid.innerHTML += window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
Hei.innerHTML += window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
Loc.innerHTML += window.location.href;
Por.innerHTML += window.location.protocol;


function changeLoc(){
    window.location.assign("https://toplearn.com");
}