var num = document.getElementById("num").value;
var res = document.getElementById("result");

function func() {

    res.innerHTML = "";

    try {
        
        if (num == "") throw "empty";
        if (isNaN(num)) throw "not number";

        num = Number(num);

        if (num < 5) throw "too low";
        if (num > 10) throw "too hight";
        throw "Ok";
    } 
    catch (err) {
        res.innerHTML = "Input is " + err;
    }
    finally {
        document.getElementById("num").value = ""; 
    }
}