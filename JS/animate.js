var pos = 0;

function Move(){

    var elem = document.getElementById("animate");
    var id = setInterval(frameEle, 5);

    function frameEle(){

        if (pos >= 450)
            clearInterval;
        else {
            pos++;
            elem.style.top = pos + "px";
            elem.style.left = pos + "px";
        }
    }
}
    function Move2(){
        
        var elem = document.getElementById("animate");
        var id = setInterval(frameEle2, 5);
    
        function frameEle2(){
    
            if (pos <= 0)
                clearInterval;
            else {
                pos--;
                elem.style.top = pos + "px";
                elem.style.left = pos + "px";
            }
        }
}