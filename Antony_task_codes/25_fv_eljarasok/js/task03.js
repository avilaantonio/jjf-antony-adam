// 3. Űrlap segítségével datepicker komponssel kérjünk be egy dátumot, majd döntsük el, hogy valós dátum -e! HTML-re jelenítsük meg az eredményt színekkel!

function solveTask03() {
    let inputText = getInputTextFromForm("inputTextT03");
    inputText = inputText.toLowerCase();
    let reversedText = getReversedText(inputText);    
    let isPolidrome = isTextPolidrome(inputText, reversedText);    
    displayResultMessageOnHtmlT03(isPolidrome);
    
    
}
function displayResultMessageOnHtmlT03(isPolidrome) {
    if (isPolidrome) {
        document.getElementById("result03").innerHTML = "A megadott szöveg polidrome!";
        document.getElementById("result03").style.color = "green"; 
    } else {
        document.getElementById("result03").innerHTML = "A megadott szöveg NEM polidrome!";
        document.getElementById("result03").style.color = "red";
    }
}


function isTextPolidrome(inputText, reversedText) {
    let result = false;
    if (inputText.localeCompare(reversedText) == 0) {
        result = true;
    }
    return result;
}

function getReversedText(inputText) {
    let reversedInputText = "";    
    for (let i = inputText.length-1; i >= 0; i--) {
        reversedInputText += inputText[i];        
    }
    return reversedInputText;
}

function getInputTextFromForm(id) {
    return document.getElementById(id).value;
}










