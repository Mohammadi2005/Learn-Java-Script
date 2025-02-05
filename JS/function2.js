(function runWithoutCall(){
    document.write("this type of function runs without calling");
})();

var sum = (a, b) => a + b;

alert(sum(5,8));
