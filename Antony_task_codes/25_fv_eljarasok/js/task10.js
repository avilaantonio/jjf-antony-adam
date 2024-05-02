function solveTask10() {
    let consumption = getInputNumberFromForm("consumptionT10");
    let petrolPrice = getInputNumberFromForm("petrolPriceT10");
    let roadLength = getInputNumberFromForm("roadLengthT10");
    let petrolConsumed = getPetrolConsumed(consumption, roadLength);    
    let travelExpenses = getTravelExpenses(petrolConsumed, petrolPrice);
    document.getElementById("result10").textContent = "Az utazás költsége: " + travelExpenses + " Ft";
}

function getTravelExpenses(petrolConsumed, petrolPrice) {
    return petrolConsumed * petrolPrice;
}

function getPetrolConsumed(consumption, roadLength) {
    return roadLength / 100 * consumption;   
}

function getInputNumberFromForm(id) {
    return Number(document.getElementById(id).value);
}