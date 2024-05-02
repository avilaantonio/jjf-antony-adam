// Feladat – Két számról döntsük el, hogy osztói –e egymásnak maradék nélkül!

function solveTask05() {
    let number1 = getInputNumberFromForm("number1T05");
    let number2 = getInputNumberFromForm("number2T05");
    let result = areDivisorsOfEachOther(number1, number2);
    displayResutMessageAlert(result);
}

function displayResutMessageAlert(result) {
    if (result) {
        alert("A két szám osztói egymásnak!");
    } else {
        alert("A két szám osztói NEM egymásnak!");
    }
}

function areDivisorsOfEachOther(num1, num2) {
    let result = false;
    if (num1 % num2 == 0 && num2 % num1 == 0) {
        result = true;
    } 
    return result;
}

function getInputNumberFromForm(id) {
    return Number(document.getElementById(id).value);
}

