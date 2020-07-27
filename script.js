function input(num){
    document.getElementById("display").value = document.getElementById("display").value + num;
}

function erase(){
    document.getElementById("display").value = "";
}

function equal(){
    document.getElementById("display").value = eval(document.getElementById("display").value);
}