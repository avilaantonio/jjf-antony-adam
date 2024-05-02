function solveTask08() {
    let inputText = getInputTextFromForm("textT08");
    let numerOfVowels = getNumerOfVowels(inputText);
    alert("A szöveg " + numerOfVowels + "db magánhangzót tartalmaz!");
    document.getElementById("result08").innerHTML = "A szöveg " + numerOfVowels + "db magánhangzót tartalmaz!"; 
}

function getNumerOfVowels(text) {
    let counter = 0;
    let vowels = ['a', 'e', 'u', 'i', 'o'];
    for (let i = 0; i < text.length; i++) {
        if (vowels.includes(text[i])) {
            counter++;
        }        
    }
    return counter;
}

function getInputTextFromForm(id) {
    return document.getElementById(id).value;
}



