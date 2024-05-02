// Feladat: Készítsünk banner-t, képváltót, amely 3 képet automatikusan, véletlenszerűen váltogat. 
// Legyen paraméterezhető, hogy milyen időközönként váltogat. HTML-en jelenítsük meg a képeket, 
// logokat (töltsük le tetszőleges logókat vagy képeket). Véletlenszerűen kövessék egymást a képek, 
// de 2X ugyanaz a kép ne szerepeljen!
// Mindenki a saját nevével hozzon létre branch-et és abba töltse fel a megoldást!

let randomNumber = () => { return Math.floor(Math.random() * 5) };

function collectRandomNumbers() {
    let numbers = [];
    for (let i = 0; i < 5; i++) {
        numbers.push(randomNumber());
    }
    return numbers;
}

function isNotEqualNumbers(numbers) {
    let result = false;
    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            if (numbers[i] == numbers[j]) {
                result = true;
            }
        }
    }
    return result;
}

function verifyRandomNumbersNotEqual() {
    let numbers = collectRandomNumbers();
    while (isNotEqualNumbers(numbers)) {
        numbers = collectRandomNumbers();
    }
    return numbers;
}

function randomImg(numbers, img) {
    img = [];
    for (let i = 0; i < numbers.length; i++) {
        img.push("img/img" + numbers[i] + ".jpg");
    }
    return img;
}

function lastNotEqualFirst (x){
    var tempArray = randomImg(verifyRandomNumbersNotEqual(), tempArray);
    while (x != tempArray[0]){
        tempArray = randomImg(verifyRandomNumbersNotEqual(), tempArray);  
    } 
    return tempArray;
}

$( document ).ready(function() {
    $('#rangeStepText').text($('#fadeTime').val()+'sec');
    $('#fadeTime').on('input', function(){
         value = $('#fadeTime').val()+'sec';
         $('#rangeStepText').text(value);
    });
});

$(document).ready(function () {
    var images = randomImg(verifyRandomNumbersNotEqual(), images);
    let index = 1;
    let fadeTime = 3000;
    $('#randomImg').attr('src', images[0]);
    $('#fadeButton').click(function () {
        fadeTime = document.getElementById("fadeTime").value*500;
        fadeImages();
    });
    
    function fadeImages() {
        $('#randomImg').fadeOut(fadeTime, function () {
            $(this).attr('src', images[index]);
            if (index < images.length-1) {
                $(this).fadeIn(fadeTime, function () {
                    index += 1;
                    fadeImages();
                });
            } else {
                setTimeout(function () {
                    temp  = images[images.length-1];
                    index = 1;
                    images = lastNotEqualFirst(temp);
                    $('#randomImg').attr('src', images[0]);
                    $('#randomImg').fadeIn(fadeTime);
                });
            }
        });
    }
});



