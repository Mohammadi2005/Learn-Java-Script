// port 7 : class

var person = {
    fname : "amir",
    lname : "mohammadi",
    age : 20,
    getData : function() {
        return this.fname + " " + this.lname + " is " + this.age + " years old";
    }
};

var Data = document.getElementById("data");
Data.innerHTML =  person.getData();