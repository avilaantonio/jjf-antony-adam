
function solveTask19() {
    let dailyIncome = getInputNumberFromForm("dailyIncomeT19");     
    let resultMessage = getResultMessageT19(dailyIncome);    
    document.getElementById("result19").innerHTML = resultMessage;
}
function getResultMessageT19(dailyIncome) {
    return "A napi jutalom: " + Math.round(dailyIncome * 0.05) + "ft";
}

function getInputNumberFromForm(id) {
    return Number(document.getElementById(id).value);
}