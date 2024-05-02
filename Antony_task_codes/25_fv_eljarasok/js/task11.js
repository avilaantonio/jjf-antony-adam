function solveTask11() {
    let euroExchangeRate = getInputNumberFromForm("euroExchangeRate");
    let amount = getInputNumberFromForm("amountT11");
    let result = getConversionResultT11(euroExchangeRate, amount);
    document.getElementById("result11").innerHTML = "Az átváltott euro " + result + " Ft-ot ér!"
}

function getConversionResultT11(euroExchangeRate, amount) {
    return amount * euroExchangeRate;
}


function getInputNumberFromForm(id) {
    return Number(document.getElementById(id).value);
}