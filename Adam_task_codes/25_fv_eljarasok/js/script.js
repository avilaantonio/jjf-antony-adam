document.onload = tempP();

const alertPlaceholder = document.getElementById('liveAlertPlaceholder');
const alertResultTrip = (message, type) => {
    const wrapper = document.createElement('div');
    alertPlaceholder.innerHTML = "";
    wrapper.innerHTML = [
        `<div class="alert alert-danger alert-dismissible fade show mt-3" role="alert">`,
        `   <div>Hiányzó adat, adatok!</div>`,
        '</div>'
    ].join('');
    alertPlaceholder.append(wrapper);
}

function validateTaskInputs(x) {
    let validateId = getIdValidateRequest(x);
    //console.log(validateId);
    let input = isValidateData(validateId);
    //console.log(input);
    if (!input) {
        alertResultTrip();
    } else {
        alertPlaceholder.innerHTML = "";
    }
    return input;
}

function getIdValidateRequest(x) {
    let id = [];
    document.querySelectorAll(`#taskDiv${('0' + (x)).slice(-2)}>div input, select`).forEach(req => {
        if (req.required == true) {
            id.push(req.id);
        };
    });
    //console.log(id);
    return id;
}

function isValidateData(x) {
    //console.log(x);
    let isValueAllRequestedInputs = true;
    x.forEach(req => {
        if (!parseDataFrom(req)) {
            isValueAllRequestedInputs = false;
        }
        //console.log(isValueAllRequestedInputs);
    });
    return isValueAllRequestedInputs;
}

//header feladatválasztó
document.querySelectorAll('header>div>nav>div>div .btn').forEach(btn => {
    btn.addEventListener('click', function () {
        let x = "taskDiv" + this.id.slice(-2);
        //console.log(x);
        addShowDiv(x);
    })
});

function hasClass(element, cls) {
    return (' ' + element.className + ' ').indexOf(' ' + cls + ' ') > -1;
}
function isItShow(x) {
    document.getElementById(x).classList.remove('d-flex');
    document.getElementById(x).classList.add('d-none');
    tempP();
}
function isItHide(x) {
    let tasksDivs = document.getElementById("taskContainer").children;
    for (let i = 0; i < tasksDivs.length; i++) {
        tasksDivs[i].classList.remove('d-flex');
        tasksDivs[i].classList.add('d-none');
    }
    document.getElementById(x).classList.remove('d-none');
    document.getElementById(x).classList.add('d-flex');
}
function addShowDiv(x) {
    let y = hasClass(document.getElementById(x), 'd-none');
    if (y) {
        isItHide(x);
    } else {
        isItShow(x);
    }
}

function tempP() {
    let h1 = document.createElement('h1');
    h1.classList.add('text-secondary', 'display-1');
    h1.innerHTML = "Válasszon egy feladatot.<br>Az egyik gomb megnyomásával."
    let container = document.getElementById("taskContainer");
    container.appendChild(h1);
}

//adatbekérés
function parseDataFrom(idfrom) {
    //console.log(idfrom);
    let data = document.getElementById(idfrom).value;
    //console.log(data, typeof(data));
    return data;
}

function getTask0XDatas(x) {
    let datas = [];
    const formInputs = document.getElementById(`formTask${('0' + (x)).slice(-2)}`).children;
    //console.log(x, formInputs.length);
    for (let i = 0; i < formInputs.length; i++) {
        y = ('0' + (i + 1)).slice(-2);
        datas.push(parseDataFrom(`task${('0' + (x)).slice(-2)}data` + y));
        //console.log(y, datas);
    }
    return datas;
}

let arrayedTwoDatas = (x, y) => { let data = [x, y]; return data; };

/*****************************************************************************************************/
//Feladat01 -   Készítsünk függvényt, amelynek első bemenő paramétere egy egész szám, a termék ára, második paramétere az ÁFA értéke. A függvény térjen vissza a termék 
//              bruttó árával! Az eredményt a felugró ablakban jelenítsük meg!

function getNumbersTask04() {
    let netPrice = Number(document.getElementById("task04num01").value);
    let tax = Number(document.getElementById("task04num02").value);
    return [netPrice, tax];
}

function countGrossPrice(a, b) {
    return a * (1 + (b / 100));
}

let printTask01Result = (message) => { document.getElementById("resultTask01").textContent = message; }

function messageTask01(x) {
    let message = "A bruttó ár: " + Math.floor(x) + ",- peták";
    return message;
}

function resultTask01() {
    validateTaskInputs(1);
    let numbers = getTask0XDatas(1);
    let result = countGrossPrice(numbers[0], numbers[1]);
    let message = messageTask01(result);
    printTask01Result(message);
}

/*****************************************************************************************************/
//Feladat02 –   Készítsünk metódust, ami egy számról eldönti, hogy prím szám –e? Az eredményt a felugró ablakban jelenítsük meg!

let printTask02Result = (message) => { document.getElementById("resultTask02").textContent = message; }

const isPrime = num => {
    for (let i = 2, s = Math.sqrt(num); i <= s; i++) {
        if (num % i === 0) return false;
    }
    console.log(num);
    return num > 1;
}

function messageTask02(x, y) {
    let message = y + " nem prím szám.";
    if (x == true) {
        message = y + " prím szám.";
    }
    return message;
}

function resultTask02() {
    validateTaskInputs(2);
    let numbers = getTask0XDatas(2);
    let result = isPrime(numbers[0]);
    let message = messageTask02(result, numbers[0]);
    printTask02Result(message);
}


/*****************************************************************************************************/
//Feladat03 –   Készítsünk metódust, ami egy szövegről eldönti, hogy palindrome –e? (Pld. Rád rohan a hordár.). Az eredményt a HTML kimeneten jelenítsük meg!

let printTask03Result = (message) => { document.getElementById("resultTask03").textContent = message; }

const isPalindrome = str => {
    let isPalindrome = false;
    let reversed = str.split('').reverse().join('');
    if (str === reversed) {
        isPalindrome = true;
    }
    return isPalindrome;
}

function preparationPalindrome(x) {
    let y = String(x).toLowerCase();
    let z = y.replace(/[^a-z0-9]/g, '');
    console.log(z);
    return z;
}

function messageTask03(x) {
    let message = "A megadott szöveg nem palindrome.";
    if (x) {
        message = "A megadott szöveg palindrome.";
    }
    return message;
}

function resultTask03() {
    validateTaskInputs(3);
    let text = preparationPalindrome(getTask0XDatas(3));
    let result = isPalindrome(text);
    let message = messageTask03(result, text);
    printTask03Result(message);
}

/*****************************************************************************************************/
//Feladat04 -   Készítsünk függvényt/eljárás, amelynek bemenő paramétere, hogy milyen hosszú jelszót szeretnénk, visszatérése a generált jelszó! Kizárólag angol ABC betűi
//              és számok szerepelhetnek a jelszóban, kisbetű-nagybetű vegyesen véletlenszerűen!

let printTask04Result = (message) => { document.getElementById("resultTask04").textContent = message; }

function generateRandomString(length) {
    const charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        result += charset[randomIndex];
    }
    return result;
}

function resultTask04() {
    validateTaskInputs(4);
    let numbers = getTask0XDatas(4);
    let result = generateRandomString(numbers[0]);
    printTask04Result(result);
}

/*****************************************************************************************************/
//Feladat05 –   Két számról döntsük el, hogy osztói –e egymásnak maradék nélkül!

let printTask05Result = (message) => { document.getElementById("resultTask05").textContent = message; }

function isNumbersDivisible(x, y) {
    let result = false;
    if (x % y == 0) {
        result = true;
    } else if (y % x == 0) {
        result = true;
    }
    return result;
}

function messageTask05(x) {
    let message = "A megadott számok nem osztói egymásnak maradék nélkül.";
    if (x) {
        message = "A megadott számok osztói egymásnak maradék nélkül.";
    }
    return message;
}

function resultTask05() {
    validateTaskInputs(5);
    let numbers = getTask0XDatas(5);
    console.log(numbers);
    let result = isNumbersDivisible(numbers[0], numbers[1]);
    let message = messageTask05(result);
    printTask05Result(message);
}

/*****************************************************************************************************/
//Feladat06 –   Készítsünk ötöslottó alkalmazást, generáljunk le 5 darab lehetséges nyerőszámot! Egy héten egy számot csak egyszer húzhatnak ki! Az eredményt a HTML kimeneten
//              jelenítsük meg!

let randomNumber90Generator = () => Math.floor(Math.random() * 90) + 1;

let printTask06Result = (message) => { document.getElementById("resultTask06").textContent = message; }

function collectRandomNumbersFor5Lotto() {
    let numbers = [];
    for (let i = 0; i < 5; i++) {
        numbers.push(randomNumber90Generator());
    }
    return numbers;
}

function isNotEqualNumbers(numbers) {
    //console.log(numbers);
    let result = false;
    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            if (numbers[i] == numbers[j]) {
                result = true;
            }
        }
    }
    console.log(result);
    return result;
}

function resultTask06() {
    validateTaskInputs(6);
    let numbers = collectRandomNumbersFor5Lotto();
    while (isNotEqualNumbers(numbers)) {
        numbers = collectRandomNumbersFor5Lotto();
    }
    let result = numbers.sort((a, b) => a - b).join(", ");
    console.log(result);
    printTask06Result(result);
}

/*****************************************************************************************************/
//Feladat07 –   Készítünk alkalmazást, amely egy teljes év lehetséges hatoslottó számait legenerálja! Egy héten egy számot csak egyszer húzhatnak ki!

let randomNumber45Generator = () => Math.floor(Math.random() * 45) + 1;

let printTask07Result = (message, i) => { document.getElementById("resultTask07").innerHTML += (i + 1) + ". Hét számai: " + message + "<br>"; }

function collectRandomNumbersFor6Lotto() {
    let numbers = [];
    for (let i = 0; i < 6; i++) {
        numbers.push(randomNumber45Generator());
    }
    return numbers;
}

function resultTask07() {
    validateTaskInputs(7);
    document.getElementById("resultTask07").textContent = "";
    for (let i = 0; i < 52; i++) {
        let numbers = collectRandomNumbersFor6Lotto();
        while (isNotEqualNumbers(numbers)) {
            numbers = collectRandomNumbersFor6Lotto();
        }
        let result = numbers.sort((a, b) => a - b).join(", ");
        console.log(result);
        printTask07Result(result, i);
    }
}

/*****************************************************************************************************/
//Feladat08 –   Készítsünk alkalmazást, amely egy szövegről elárulja, a karakterek hány százaléka magánhangzó! A speciális karaktereket ne vegyük figyelembe a számításkor!

let printTask08Result = (x) => { document.getElementById("resultTask08").textContent = "A megadott szöveg " + x + "%-a magánhangzó."; }

const howManyPercentVowel = str => {
    let vowels = ['a', 'á', 'e', 'é', 'i', 'í', 'o', 'ó', 'ö', 'ő', 'u', 'ú', 'ü', 'ű'];
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            count++;
        }
    }
    return (count / str.length * 100).toFixed(2);
}

function preparationPercent(x) {
    let y = String(x).toLowerCase();
    let z = y.replace(/[^a-z0-9]/g, '');
    console.log(z);
    return z;
}

function resultTask08() {
    validateTaskInputs(8);
    let text = preparationPercent(getTask0XDatas(8));
    let result = howManyPercentVowel(text);
    printTask08Result(result);
}

/*****************************************************************************************************/
//Feladat09 –   Pitagorasz tétel => kérjük be a derékszögű háromszög 2 befogóját, majd írjuk ki az átfogó értékét!

let printTask09Result = (x) => { document.getElementById("resultTask09").textContent = "Az átfogó értéke: " + x + "cm"; }

const countPitagoras = (x, y) => { return (Math.pow(x, 2) + Math.pow(y, 2)); }

function resultTask09() {
    validateTaskInputs(9);
    let numbers = getTask0XDatas(9);
    let hypotenuse = countPitagoras(numbers[0], numbers[1]);
    let result = (Math.sqrt(hypotenuse)).toFixed(2);
    printTask09Result(result);
}

/*****************************************************************************************************/
//Feladat10 –   Programunk kérje be egy autó fogyasztását (literben 100 km-en), a benzin literenkénti árát és a megteendő út hosszát, majd számítsa ki az útiköltséget!
let printTask10Result = (message) => { document.getElementById("resultTask10").textContent = message; }

let countTripPrice = (x) => { return Math.floor(x[0] * (x[1] / 100) * x[2]) };

function messageTask10(x, y) {
    let message = "Hiányzó adatok!";
    if (x) {
        message = "Költség összesen: " + y + " Ft";
    }
    return message;
}

function resultTask10() {
    let x = validateTaskInputs(10);
    let y = countTripPrice(getTask0XDatas(10));
    let message = messageTask10(x, y);
    printTask10Result(message);
}

/*****************************************************************************************************/
//Feladat11 –   Programunk kérje be az Euró árfolyamát (1 € hány Ft-ot ér), majd azt, hogy hány eurót akarunk átváltani Ft-ba, majd írja ki, hogy hány Ft az átváltott euró.

let printTask11Result = (x) => { document.getElementById("resultTask11").textContent = "Az átváltandó €: " + x + " Ft"; }

const multiplyEuroFt = (x, y) => { return (x * y).toFixed(0); }

function resultTask11() {
    validateTaskInputs(11);
    let numbers = getTask0XDatas(11);
    let result = multiplyEuroFt(numbers[0], numbers[1]);
    printTask11Result(result);
}

/*****************************************************************************************************/
//Feladat12 –   Hozzunk létre alkalmazást, amely kiszámolja a kocka felszínét és térfogatát!

let printTask12Result = (x, y) => { document.getElementById("resultTask12").textContent = "Kocka felszíne: " + x + "cm². " + "Kocka térfogata: " + y + "cm³."; }

let countCubeSurface = (x) => { return (x * x * 6).toFixed(1); }

let countCubeVolume = (x) => { return Math.pow(x, 3).toFixed(1); }

function resultTask12() {
    validateTaskInputs(12);
    let numbers = getTask0XDatas(12);
    let surface = countCubeSurface(numbers[0]);
    let volume = countCubeVolume(numbers[0]);
    printTask12Result(surface, volume);
}

/*****************************************************************************************************/
//Feladat13 –   Olvassuk be egy egyenes körkúp sugarát és magasságát, majd számoljuk ki belőle a térfogatát és a felszínét!

let printTask13Result = (x, y) => { document.getElementById("resultTask13").textContent = "Az egyenes körkúp felszíne: " + x + "cm². " + "Az egyenes körkúp térfogata: " + y + "cm³."; }

let countCylinderSurface = (x, y) => { return (Math.PI * x * Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2)) + Math.PI * Math.pow(x, 2)).toFixed(1); }

let countCylinderVolume = (x, y) => { return ((1 / 3) * Math.PI * Math.pow(x, 2) * y).toFixed(1); }

function resultTask13() {
    validateTaskInputs(13);
    let numbers = getTask0XDatas(13);
    let surface = countCylinderSurface(numbers[0], numbers[1]);
    let volume = countCylinderVolume(numbers[0], numbers[1]);
    printTask13Result(surface, volume);
}


/*****************************************************************************************************/
//Feladat14 –   Készítsünk függvényt tombFeltolt() néven, amely feltölt véletlen számokkal egy tömböt a felhasználótól érkező és véletlenszerű bemenő paraméterekkel. Az első
//              paraméter legyen az elemszám (hány darab elem legyen a tömbben)  ez legyen véletlen szám 5-20 között, a második a véletlen számok alsó határa, a harmadik pedig
//              a felső határa, melyeket a felhasználó adjon meg. A függvény visszatérése tömb adatszerkezet legyen! A következő feladatokat függvények segítségével oldjuk meg!

let printTask14Result = (message) => {
    if (message != undefined) {
        document.getElementById("resultTask14").innerHTML += message;
    }
}

let msg00 = (x, y, z, q) => { printTask14Result(x + "-" + y + " közötti számok " + z + "db növekvő sorrendben: <br>" + q.sort((a, b) => a - b).join(", ")); }
let msg01 = (x) => { printTask14Result("<br>A páros elemek összege: " + x); }
let msg02 = (x) => { printTask14Result("<br>A páratlan elemek átlaga: " + x.toFixed(2)); }
let msg03 = (x) => { printTask14Result("<br>A legkisebb értékű elem: " + x); }
let msg04 = (x) => { printTask14Result("<br>A legkisebb értékű elem indexe, indexeik: " + x.join(", ")); }
let msg05 = (x) => { printTask14Result("<br>Véletlenszerű elem a tömbből: " + x); }
let msg06 = (x) => { printTask14Result("<br>Minden 5-ik elem: " + x.join(", ")); }
let msg07 = (x) => {
    if (x.length >= 2) {
        arr = [];
        for (let i = 0; i < x.length; i++) {
            arr.push(x[i]);
        }
        x = arr.sort((a, b) => a - b).join(", ");
    }
    return printTask14Result("<br>Minden 3-mal osztható elem: " + x);
}

function theLowestNumber(x) {
    let min = x[0];
    x.forEach(number => {
        if (number < min) {
            min = number;
        }
    })
    return min;
}

function indexOfTheLowestNumber(x) {
    let lowestNumber = theLowestNumber(x);
    let arr = [];
    for (let i = 0; i < x.length; i++) {
        if (x[i] == lowestNumber) {
            arr.push(i);
        }
    }
    return arr;
}

function printRandomElementTheArrayInHTML(x) {
    let theIndexRandom = Math.floor(Math.random() * x.length)
    let theChoosenOne = x[theIndexRandom];
    return theChoosenOne;
}

function printEveryFithElementTheArrayInHTML(x) {
    let arr = [];
    for (let i = 0; i < x.length; i++) {
        if (i % 5 == 0) {
            arr.push(x[i]);
        }
    }
    return arr;
}

function collectEveryElementDivedableForThree(x) {
    let arr = [];
    x.forEach(y => {
        if (y % 3 == 0) {
            arr.push(y);
        }
    })
    return arr;
}

function isTheElementsOfArrayDivedableForThree(x) {
    let result = false;
    x.forEach(y => {
        if (y % 3 == 0) {
            result = true;
        }
    })
    return result;
}

function areTheyEven(x) {
    let counter = 0;
    x.forEach(y => {
        if (y % 2 == 0) {
            counter++;
        }
    })
    return counter;
}

function meanAllOdd(x) {
    let counter = 0;
    let sumOddNumbers = 0;
    x.forEach(y => {
        if (y % 2 != 0) {
            sumOddNumbers += y;
            counter++;
        }
    })
    return sumOddNumbers / counter;
}

function sumAllEven(x) {
    let sumEvenNumbers = 0;
    x.forEach(y => {
        if (y % 2 == 0) {
            sumEvenNumbers += y;
        }
    })
    return sumEvenNumbers;
}

function fillArrayWithRandomNumberBetweenMinMax(min, max) {
    let elementArray = Math.floor(Math.random() * (20 - 5 + 1) + 5);
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    let arr = [];
    for (let i = 0; i < elementArray; i++) {
        arr.push(Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled));
    }
    return [elementArray, arr];
}

function printTaskMsg01Result(x) {
    let result = sumAllEven(x);
    printTask14Result(msg01(result));
}

function printTaskMsg02Result(x) {
    let result = meanAllOdd(x);
    printTask14Result(msg02(result));
}

function printTaskMsg03Result(x) {
    let result = theLowestNumber(x);
    printTask14Result(msg03(result));
}

function printTaskMsg04Result(x) {
    let result = indexOfTheLowestNumber(x);
    printTask14Result(msg04(result));
}

function printTaskMsg05Result(x) {
    let result = printRandomElementTheArrayInHTML(x);
    printTask14Result(msg05(result));
}

function printTaskMsg06Result(x) {
    let result = printEveryFithElementTheArrayInHTML(x);
    printTask14Result(msg06(result));
}

function printTaskMsg07ResultMessage(x) {
    let result = ["A tömb elemeinek egyike sem osztható maradék nélkül 3-mal."];
    if (isTheElementsOfArrayDivedableForThree(x)) {
        result = collectEveryElementDivedableForThree(x);
    }
    return result;
}

function printTaskMsg07Result(x) {
    let result = printTaskMsg07ResultMessage(x);
    printTask14Result(msg07(result));
}

function resultTask14() {
    document.getElementById("resultTask14").innerHTML = "";
    validateTaskInputs(14);
    let numbers = getTask0XDatas(14);
    let result = fillArrayWithRandomNumberBetweenMinMax(numbers[0], numbers[1]);
    msg00(numbers[0], numbers[1], result[0], result[1]);
    printTaskMsg01Result(result[1]);
    printTaskMsg02Result(result[1]);
    printTaskMsg03Result(result[1]);
    printTaskMsg04Result(result[1]);
    printTaskMsg05Result(result[1]);
    printTaskMsg06Result(result[1]);
    printTaskMsg07Result(result[1]);
}

/*****************************************************************************************************/
//Feladat15 –   Kérjük be a felhasználó tömegét kg-ban és magasságát cm-ben, majd számítsuk ki és írjuk a képernyőre a felhasználó testtömeg-indexét a következő képlet alapján:

let printTask15Result = (x) => { document.getElementById("resultTask15").textContent = x; }

function countBodyMassIndex(x) {
    let result = x[0] / (x[1] / 100 * x[1] / 100);
    return result;
}

function correlateBodyMassIndex(x) {
    let message = [];
    if (x < 18.5) {
        message = skinnyBody(x);
    } else if (x >= 18.5 && x < 25) {
        message = averageBody(x);
    } else if (x >= 25) {
        message = fatBody(x);
    }
    return message;
}

function skinnyBody(x) {
    let selector = 0;
    let message = "Az ön testsúlyindexe: " + x;
    if (x >= 16 && x < 17) {
        selector = 1;
        message = "Az ön testsúlyindexe: " + x;
    } else if (x >= 17 && x < 18.5) {
        selector = 2;
        message = "Az ön testsúlyindexe: " + x;
    }
    return [message, selector];
}

function averageBody(x) {
    let selector = 3;
    let message = "Az ön testsúlyindexe: " + x;
    return [message, selector];
}

function fatBody(x) {
    let selector = 7;
    let message = "Az ön testsúlyindexe: " + x;
    if (x >= 35 && x < 40) {
        selector = 6;
        message = "Az ön testsúlyindexe: " + x;
    } else if (x >= 30 && x < 35) {
        selector = 5;
        message = "Az ön testsúlyindexe: " + x;
    } else if (x >= 25 && x < 30) {
        selector = 4;
        message = "Az ön testsúlyindexe: " + x;
    }
    return [message, selector];
}

function highlightTableSelectedRow(x) {
    let tableBodyRows = document.querySelector("table>tbody").children;
    for (let i = 0; i < tableBodyRows.length; i++) {
        tableBodyRows[i].classList.remove('table-dark');
        if (i == x) {
            tableBodyRows[i].classList.add('table-dark');
        }
    }
}

function resultTask15() {
    validateTaskInputs(15);
    let numbers = getTask0XDatas(15);
    let result = countBodyMassIndex(numbers).toFixed(1);
    let message = correlateBodyMassIndex(result);
    console.log(result, message);
    printTask15Result(message[0]);
    highlightTableSelectedRow(message[1]);
}

/*****************************************************************************************************/
//Feladat16 –   Olvassuk be, hogy a felhasználó átlagosan hány órát alszik naponta (egész számként), és jellemezzük az alvásidejét a következő módon: 0-6 óráig kevés, 7-9 óráig
//              átlagos, 10-12 óráig sok, 13-24 óráig nagyon sok!

let printTask16Result = (x) => { document.getElementById("resultTask16").textContent = x; }

function messageTask16(x, y) {
    let bgColorResult = 0;
    let message = "kevés";
    if (x >= 7 && x < 10) {
        message = "átlagos";
        bgColorResult = 1;
    } else if (x >= 10 && x < 13) {
        message = "sok";
        bgColorResult = 2;
    } else if (x >= 13 && x <= 24) {
        message = "nagyon sok";
        bgColorResult = 3;
    } else if (x > 24) {
        removeOtherBg();
        message = "Ön nem a földről származik";
        bgColorResult = -1;
    }
    return [message, bgColorResult];
}

function bgColorTask16Message(x) {
    let messageParagraph = document.getElementById("resultTask16");
    if (x == 0) {
        removeOtherBg();
        messageParagraph.classList.add('bg-info', 'px-2', 'rounded');
    } else if (x == 1) {
        removeOtherBg();
        messageParagraph.classList.add('bg-success', 'px-2', 'rounded');
    } else if (x == 2) {
        removeOtherBg();
        messageParagraph.classList.add('bg-warning', 'px-2', 'rounded');
    } else if (x == 3) {
        removeOtherBg();
        messageParagraph.classList.add('bg-danger', 'px-2', 'rounded');
    }
    return;
}

function removeOtherBg(){
    let messageParagraph = document.getElementById("resultTask16");
    messageParagraph.classList.remove('bg-info', 'bg-success', 'bg-warning', 'bg-danger', 'px-2', 'rounded');
    return;
}

function resultTask16(){
    document.getElementById("resultTask16").classList.add('bg-none', 'px-0');
    validateTaskInputs(16);
    let number = getTask0XDatas(16);
    let result = messageTask16(number);
    bgColorTask16Message(result[1]);
    printTask16Result(result[0]);
}

/*****************************************************************************************************/
//Feladat17 –   Készítsünk egy másodfokú egyenlet megoldó alkalmazást! Kérjük be a, b és c értékét, majd számoljuk ki x1-et és x2-t, ahol:

let printTask17Result = (x,y) => { document.getElementById("resultTask17").innerHTML = "Az x1: "+x.toFixed(2)+"<br> Az x2: "+y.toFixed(2); }

let countX1 = (x,y,z) => { return ((-Math.abs(y)+Math.sqrt(Math.abs(Math.pow(y, 2) - 4*x*z)))/(2*x));}
let countX2 = (x,y,z) => { return ((-Math.abs(y)-Math.sqrt(Math.abs(Math.pow(y, 2) - 4*x*z)))/(2*x));}

function resultTask17(){
    validateTaskInputs(17);
    let numbers = getTask0XDatas(17);
    printTask17Result(countX1(numbers[0], numbers[1], numbers[2]),countX2(numbers[0], numbers[1], numbers[2]));
}

/*****************************************************************************************************/
//Feladat18 –   Írjuk ki 3 db pénzfeldobás eredményét (fej vagy írás véletlenszerűen, szövegesen jelenjen meg)!

let printTask18Result = (x,y,z) => { document.getElementById("resultTask18").innerHTML = x+"<br>"+y+"<br>"+z; }

let randomNullOrOne = () => { return Math.floor(Math.random()*2);}

function getHeadOrWrite (x) {
    console.log(x);
    let message = "Írás";
    if (x == 1) {
        message = "Fej";
    }
    return message;
}

function resultTask18(){
    validateTaskInputs(18);
    printTask18Result(getHeadOrWrite(randomNullOrOne()), getHeadOrWrite(randomNullOrOne()), getHeadOrWrite(randomNullOrOne()));
}

/*****************************************************************************************************/
//Feladat19 –   Egy pénztáros a napi bevételének 5%-át megkapja jutalomként. Kérd be a napi bevételt, és írd a képernyőre, hogy mennyi a jutalom! A jutalmat kerekítsd egész
//              értékre!

let printTask19Result = (x) => { document.getElementById("resultTask19").textContent = "A jutalom: "+ (x*0.05).toFixed(2)+"Ft"}
let resultTask19 = () => { 
    validateTaskInputs(18); 
    printTask19Result(getTask0XDatas(19)) 
}

/*****************************************************************************************************/
//Feladat20 –   Kérjük be a felhasználó születési helyét, majd döntsük el, hogy vidéken vagy a fővárosban született!

let printTask20Result = (x) => { document.getElementById("resultTask20").textContent = x }

function isCountryside(x) {
    console.log(x);
    let message = "Vidéken született";
    let place = x[0].toLowerCase();
    if (place == "budapest") {
        message = "A fővárosban született";
    }
    return message;
}

function resultTask20(){
    validateTaskInputs(20);
    let message = isCountryside(getTask0XDatas(20));
    printTask20Result(message);
}
