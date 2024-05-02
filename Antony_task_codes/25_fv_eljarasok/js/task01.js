// 1. Feladat - Készítsünk függvényt, amelynek első bemenő paramétere egy egész szám, a termék ára, második paramétere az ÁFA értéke. A függvény térjen vissza a termék bruttó árával! Az eredményt a felugró ablakban jelenítsük meg!

function getTask01() {
    let netPrice = getInputNumberFromForm("netPriceT01");
    let vat = getInputNumberFromForm("vatT01");
    let grossPrice = calculateNetPrice(netPrice, vat);
    displayResulAlert(grossPrice);
}

function getInputNumberFromForm(id) {
    return Number(document.getElementById(id).value);
}

function calculateNetPrice(netPrice, vat) {
    return netPrice + (vat / 100 * netPrice);
}

function displayResulAlert(grossPrice) {
    alert("A Termék bruttó ára: " + grossPrice + "ft");
}