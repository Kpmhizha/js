function changeAttribute(){
    var m = document.getElementById("inputboxes");
    var make = m.elements["Imake"].value;
    var model = m.elements["Imodel"].value;
    var color = m.elements["Icolor"].value;
    document.getElementById("maker").innerHTML=make;
    document.getElementById("model").innerHTML=model;
    document.getElementById("colour").innerHTML=color;

}