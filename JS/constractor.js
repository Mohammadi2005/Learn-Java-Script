function Person(fname, lname, age){
    this.fname = fname;
    this.lname = lname;
    this.age = age;
    this.getName = function() {
        return this.fname + " " + this.lname;
    }
}

var me = new Person("hossein", "mohammadi", 20);
console.log(me.getName());

