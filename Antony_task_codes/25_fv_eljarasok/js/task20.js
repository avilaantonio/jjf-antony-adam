
function solveTask20() {
    let placeOfBirth = getInputDataFromForm("placeOfBirth");     
    let resultMessage = getResultMessageT19(placeOfBirth);    
    document.getElementById("result20").innerHTML = resultMessage;
}
function getResultMessageT19(placeOfBirth) {
    let message = "Vidéken született.";
    if (placeOfBirth == "Budapest") {
        message = "Fővárosban született.";
    }
    return message;
}

function getInputDataFromForm(id) {
    return document.getElementById(id).value;
}