
function solveTask16() {
    let sleepingHours = getInputNumberFromForm("sleepingHoursT16");     
    let resultMessage = getResultMessageT16(sleepingHours);    
    document.getElementById("result16").innerHTML = resultMessage;
}

function getResultMessageT16(sleepingHours) {
    let message = "";
    if (sleepingHours <= 6) {
        message = "Kevés";
    } else if (6 < sleepingHours && sleepingHours < 10){
        message = "Átlagos";
    } else if (9 < sleepingHours && sleepingHours < 13){
        message = "Sok";
    } else if (12 < sleepingHours && sleepingHours <= 24){
        message = "Nagyon sok";
    } 
    return message;
}

function getInputNumberFromForm(id) {
    return Number(document.getElementById(id).value);
}