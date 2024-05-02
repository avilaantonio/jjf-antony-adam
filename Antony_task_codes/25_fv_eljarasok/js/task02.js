
function solveTask02() {
    let number = getInputNumberFromForm("numberT02");
    let squareRootOfNumber = Math.floor(Math.sqrt(number));
    let isInputNumberPrime = isPrime(number, squareRootOfNumber);
    displayResultMessageAlert(isInputNumberPrime);    
}

function displayResultMessageAlert(isInputNumberPrime) {
    isInputNumberPrime ? alert("A vizsgált szám prim!!!") : alert("A vizsgált NEM szám prim!!!");
}

function isPrime(number, sqrt) {
    let prime = number != 1;
    for (let i = 2; i < sqrt + 1; i++) {
        if (number % i == 0) {
            prime = false;
            break;
        }
    }
    return prime;
}

function getInputNumberFromForm(id) {
    return Number(document.getElementById(id).value);
}
