// 4. Feladat - Készítsünk függvényt/eljárás, amelynek bemenő paramétere, hogy milyen hosszú jelszót szeretnénk, visszatérése a generált jelszó! Kizárólag angol ABC betűi és számok szerepelhetnek a jelszóban, kisbetű-nagybetű vegyesen véletlenszerűen!

function solveTask04() {
    let passwordLenght = getInputNumberFromForm("pwLenghtT04");
    let password = generatePassword(passwordLenght);
    document.getElementById("result04").innerHTML = "Az ön jelszava: " + password
}

function getInputNumberFromForm(id) {
    return Number(document.getElementById(id).value);
}

function generatePassword(pwLenght) {
    let validChars = ['a', 'e', 'u', 'i', 'o', 'q', 'w', 'r', 't', 	'z', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'y', 'x', 'c', 'v', 'b', 'n', 'm', 'p', 'A', 'E', 'U', 'I', 'O', 'Q', 'W', 'R', 'T', 'Z', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Y', 'X',  'C', 'V', 'B', 'N', 'M', 'P', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    let password = "";
    for (let i = 0; i < pwLenght; i++) {
        let randomChar = validChars[Math.floor(Math.random() * ((validChars.length-1)-1))+1];
        password += randomChar;        
    }
    return password;
}



