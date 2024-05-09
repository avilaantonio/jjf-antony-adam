// Feladat – Készítsünk ötöslottó alkalmazást, generáljunk le 5 darab lehetséges nyerőszámot! Egy héten egy számot csak egyszer húzhatnak ki! Az eredményt a HTML kimeneten jelenítsük meg!

function solveTask06() {    
    let lotteryNumbers = generateLotteryNumbersT06();    
    document.getElementById("result06").textContent = "A heti nyerőszámok: " + lotteryNumbers;
}

function generateLotteryNumbersT06() {   
    let lotteryNumbers = [];
    do {
        let randomNumber = Math.floor(Math.random() * (90))+1;
        if (!lotteryNumbers.includes(randomNumber)) {
            lotteryNumbers.push(randomNumber)
        }        
    } while (lotteryNumbers.length != 5);
    return lotteryNumbers;
}


