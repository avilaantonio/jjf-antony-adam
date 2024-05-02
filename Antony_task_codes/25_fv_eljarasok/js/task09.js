function solveTask09() {
    let leg1 = getInputNumberFromForm("leg1T09");
    let leg2 = getInputNumberFromForm("leg2T09");
    let hypotenuse = getHypotenuse(leg1, leg2);
    document.getElementById("result09").innerHTML = "Az átfogó értéke: " + hypotenuse
}

function getHypotenuse(a, b) {
    return Math.pow(a, 2) + Math.pow(b, 2);
}

function getInputNumberFromForm(id) {
    return Number(document.getElementById(id).value);
}