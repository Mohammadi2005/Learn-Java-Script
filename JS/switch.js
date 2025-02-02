var x = 3;

switch (x) {
    case 0:
    case 1: {
        document.write("x = 1 or x = 0");
        break;
    }
    case 2: {
        document.write("x = 2");
        break;
    }
    case 3: {
        document.write("x = 3");
        break;
    }
    case 4: {
        document.write("x = 4");
        break;
    }
    default:
        document.write("not found ...");
}

var Day = Date().getDay();

switch(Day){
    case 0:{
        document.write("Saturday");
        break;
    }
    case 1:{
        document.write("Sunday");
        break;
    }
    case 2:{
        document.write("Monday");
        break;
    }
    case 3:{
        document.write("tuesday");
        break;
    }
    case 4:{
        document.write("Wednesday");
        break;
    }
    case 5:{
        document.write("Thursday");
        break;
    }
    case 6:{
        document.write("Friday");
        break;
    }
}


