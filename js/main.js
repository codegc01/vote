document.getElementById("count").innerHTML = "wait for " + 10 + " second";

let n = 0;
let k = 0;
let m = 0;
let r = 0;

let time = 10;
function debtn(){
    document.getElementById("btn1").disabled = true;
    document.getElementById("btn1").delay(5000).disabled = false;
}
function naim() {
    debtn();
}