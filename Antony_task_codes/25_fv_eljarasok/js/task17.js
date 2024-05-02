
function solveTask17() {
    let a = getInputNumberFromForm("aT17");  
    let b = getInputNumberFromForm("bT17");  
    let c = getInputNumberFromForm("cT17");      
    let x1 = getX1(a,b,c);
    let x2 = getX2(a,b,c);       
    document.getElementById("result17").innerHTML = "x1: " + x1 + ", x2: " + x2;
}

function getX2(a,b,c) {
    return (-b + Math.sqrt(Math.pow(b,2)-4*a*c)) / 2*a;
}

function getX1(a,b,c) {
    return (-b - Math.sqrt(Math.pow(b,2)-4*a*c)) / 2*a;
}

function getInputNumberFromForm(id) {
    return Number(document.getElementById(id).value);
}