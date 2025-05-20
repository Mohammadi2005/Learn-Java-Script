var Ps = document.getElementsByTagName('p');

for (item in Ps){
    console.log(Ps[item].innerHTML);
}

var h2 = document.getElementsByClassName("test");
h2[0].innerHTML = "get element by class name returns a list";
console.log(h2[1].innerHTML);


document.getElementById("Img").src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1pb-qVaXaLJyJJAWV6jsx1yHQ-0iZS_PzAg&s";

// (function changeImg(){
//     var time = 0;
//     var timeid = setInterval(change, 6000);

//     function change(){
//         document.getElementById("Img").src = "https://static.vecteezy.com/system/resources/thumbnails/041/166/062/small/ai-generated-hawk-high-quality-image-free-photo.jpg";
//         //clearInterval(timeid);
//     }
// })();

(function changeImg2(){
    var time2 = 1000;
    var timeid2 = setInterval(change2, 6000);
    
    function change2(){
        document.getElementById("Img").src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBKyT0Pt9z4ylda0wADks0xGajcboLZVfxZ5svEbLL6ylUPTmbz1vo0A6orrgh2zQfxMk&usqp=CAU";
        clearInterval(timeid2);
    }
})();

