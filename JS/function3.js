function sum(x = 0, y = 0){
    document.write("x and y given values default <br/><br/>");
    alert(x + y);
}

sum(4, 6);


function test(){
    alert("if you dont know input arguments you can used from the arguments key word");
    for(let i = 0; i < arguments.length; i++){
        document.write(arguments[i] + "<br/>");
    }
}
test("amir", 1, true, "hello");


