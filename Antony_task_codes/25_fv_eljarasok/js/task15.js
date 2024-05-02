

function solveTask15() {
    let weight = getInputNumberFromForm("weightT15"); 
    let height = getInputNumberFromForm("heightT15");     
    let bodyMassIndex = calculateBodyMassIndex(weight, height);
    let resultMessageT15 = getResultMessageT15(bodyMassIndex);
    
    document.getElementById("result15").innerHTML = resultMessageT15;
}



function getResultMessageT15(bodyMassIndex) {
    let message = "";
    if (bodyMassIndex < 16) {
        message = "Súlyos soványság";
    } else if (16 < bodyMassIndex && bodyMassIndex < 17){
        message = "Mérsékelten soványság";
    } else if (17 < bodyMassIndex && bodyMassIndex < 18.5){
        message = "Enyhén soványság";
    } else if (18.5 < bodyMassIndex && bodyMassIndex < 25){
        message = "Normál";
    } else if (25 < bodyMassIndex && bodyMassIndex < 30){
        message = "Túlsúlyos";
    } else if (25 < bodyMassIndex && bodyMassIndex < 35){
        message = "I. fokú elhízás";
    } else if (35 < bodyMassIndex && bodyMassIndex < 40){
        message = "II. fokú elhízás";
    } else if (40 <= bodyMassIndex){
        message = "III. fokú elhízás";
    }
    return message;
}

function calculateBodyMassIndex(weight, height) {
    return weight / Math.pow(height, 2);
}

function getInputNumberFromForm(id) {
    return Number(document.getElementById(id).value);
}

let user = "345t";

console.log(10/3);