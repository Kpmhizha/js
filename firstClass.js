
//Function to return mark symbol

function firstClass (mark){
    var symbol = "";
    if(mark >= 75){
        symbol = "1";
        return symbol;
    }
    else if(mark <75 && mark >= 70){
        symbol = "2 – Division 1";
        return symbol;
    }
    else if(mark <70 && mark >= 60){
        symbol = "2 – Division 2";
        return symbol;
    }
    else if(mark <60 && mark >= 50){
        symbol = "3";
        return symbol;
    }
    else if(mark <50 && mark >= 45){
        symbol = "F1";
        return symbol;
    }
    else if(mark <45 && mark >= 30){
        symbol = "F2";
        return symbol;
    }
    else if(mark <29 && mark >= 0){
        symbol = "F3";
        return symbol;
    }
}
//Call Funcion with parameter values
console.log(firstClass(84));
console.log(firstClass(45));
console.log(firstClass(73));
console.log(firstClass(62));
 

 