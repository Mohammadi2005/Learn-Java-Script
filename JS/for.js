var NameArr = ["ali", "amir", "mohammad", "hossein"];

for(var i = 0; i < NameArr.length; i++){
    document.write(NameArr[i] + "\t");
}

var res = document.getElementById("result");

var text = "";

for (item in NameArr){
    text += NameArr[item] + " ";
}

res.innerHTML = text;
