/*
Feladat - Készítsünk függvényt tombFeltolt() néven, amely feltölt véletlen számokkal egy tömböt a 
felhasználótól érkező és véletlenszerű bemenő paraméterekkel. Az első paraméter legyen az 
elemszám (hány darab elem legyen a tömbben)  ez legyen véletlen szám 5-20 között, a második a 
véletlen számok alsó határa, a harmadik pedig a felső határa, melyeket a felhasználó adjon meg. A 
függvény visszatérése tömb adatszerkezet legyen! A következő feladatokat függvények segítségével 
oldjuk meg!*/

let randomNumbers = [];

function fillArrayT14() {
    let lengthOfArray = getInputNumberFromForm("elementNumberT14");
    let min = getInputNumberFromForm("lowerLimitT14");
    let max = getInputNumberFromForm("upperLimitT14");
    randomNumbers = fillArrayWithRandomNumbersT14(lengthOfArray, min, max);
    document.getElementById("result14").textContent = "A tömb feltöltődött!!!"    
}

function fillArrayWithRandomNumbersT14(lengthOfArray, min, max) {
    let numbers = [];
    for (let i = 0; i < lengthOfArray; i++) {
        numbers.push(Math.floor(Math.random() * (max - min) + min));        
    }
    return numbers;
}

function getInputNumberFromForm(id) {
    return Number(document.getElementById(id).value);
}

// a. Hozzunk létre egy eljárás, amely kiírja a tömb elemeit a HTML kimenetre egymás mellé vesszővel elválasztva, utolsó elem után ne legyen vessző!
function displayArrayT14() {
    let message = getResultMessageT14a();
    document.getElementById("result14/a").innerHTML = message;
}

function getResultMessageT14a() {
    let message = "";
    for (let i = 0; i < randomNumbers.length; i++) {
        if (randomNumbers.length-1 == i) {
            message += randomNumbers[i];
        } else {
            message += randomNumbers[i] + ", ";
        }            
    }
    return message
}

// b. Hozzunk létre függvényt, amely a páros elemek összegével tér vissza! Az eredményt a HTML kimeneten jelenítsük meg!
function getSumOfEvensT14() {
    let sumOfEvens = getSumOfEvenNumbers();
    document.getElementById("result14/b").innerHTML = "A páros elemek összege: " + sumOfEvens;
}

function getSumOfEvenNumbers() {
    let sumOfEvens = 0;
    randomNumbers.forEach(item => {
        if (item % 2 == 0) {
            sumOfEvens += item;
        }
    });
    return sumOfEvens;
}
// c. Hozzunk létre függvényt, amelynek visszatérése a páratlan elemek átlaga! Az eredményt a HTML imeneten jelenítsük meg!
function getAverageOfOddsT14() {
    let avgOfOdds = getMinOfNumbers();
    document.getElementById("result14/c").innerHTML = "A páratlan elemek átlaga: " + avgOfOdds;
}

function getMinOfNumbers() {
    let sumOfOdds = 0;
    let counter = 0;
    randomNumbers.forEach(item => {
        if (item % 2 != 0) {
            sumOfOdds += item;
            counter++;
        }
    });
    return sumOfOdds / counter;
}
// d. Legkisebb érték meghatározására hozzunk létre egy függvényt. Az eredményt a HTML kimeneten jelenítsük meg!
function getMinT14() {
    let min = getMinOfNumbers();
    document.getElementById("result14/d").innerHTML = "A legkissebb érték: " + min;
}

function getMinOfNumbers() {    
    return Math.min.apply(Math, randomNumbers);
}
// e. Legkisebb értékű elem indexével is térjen vissza egy függvény. Több ilyen érték is lehet. Az eredményt a HTML kimeneten jelenítsük meg!
function getMinIndexT14() {    
    let minIndexes = getMinIndexesOfArrayT14();
    document.getElementById("result14/e").innerHTML = "A legkissebb érék(ek) indexe: " + minIndexes;
 
}

function getMinIndexesOfArrayT14() {
    let min = getMinOfNumbers();
    let minIndexes = [];
    for (let i = 0; i < randomNumbers.length; i++) {
        if (min == randomNumbers[i]) {
            minIndexes.push(i);
        }        
    }
    return minIndexes;
}
// f. A tömbből véletlenszerűen jelenítsünk meg 1 db elemet! Az eredményt felugró ablakban jelenítsük meg!
function displayRandomItem() {
    alert(randomNumbers[Math.floor(Math.random() * (randomNumbers.length))]);
}
// g. A listából minden 5. elemet jelenítsünk meg a HTML kiementen!
function displayEveryFifthItem() {
    let resultMessageT14g = [];
    for (let i = 1; i <= randomNumbers.length; i++) {
        if (i % 5 == 0) {
            resultMessageT14g.push(randomNumbers[i-1]);
        }                
    }   
    document.getElementById("result14/g").innerHTML = "Minden 5. elem: " + resultMessageT14g;
}
//h. A HTML kimeneten jelenítsük meg a hárommal maradék nélkül osztható számokat! Amennyiben esetleg nem volt ilyen, arról is tájékoztassuk a felhasználót!
function displayDevisibleBy3T14() {
    let numbersDevisibleBy3 = getDevisibleBy3T14();
    let resultMessageT14h = getResultMessageT14h(numbersDevisibleBy3);
    document.getElementById("result14/h").innerHTML = resultMessageT14h;
}

function getResultMessageT14h(numbersDevisibleBy3) {
    let message = "Sajnos nem volt ilyen szám!";
    if (numbersDevisibleBy3.length > 0) {
        message = "A 3-mal osztható számok: " + numbersDevisibleBy3;
    }
    return message;
}

function getDevisibleBy3T14() {
    let numbersDevisibleBy3 = [];
    randomNumbers.forEach(item => {
        if (item % 3 == 0) {
            numbersDevisibleBy3.push(item);
        }
    });
    return numbersDevisibleBy3;
}
