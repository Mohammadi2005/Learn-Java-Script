function Loadpage(){
    alert("page loaded");
}

function SingIn(){

    var res = document.getElementById("result");
    res.innerHTML = "";

    if(confirm("ایا تمایل دارید ثبت نام کنید؟")){
        res.innerHTML = "بله، من تمایل دارم ثبت نام کنم.";
    }
    else{
        res.innerHTML = "نه، تمایل ندارم ثبت نام کنم."
    }
}


