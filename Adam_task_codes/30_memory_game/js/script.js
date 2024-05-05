const imgHolderDiv = document.getElementById('imgHolderDiv');

let randomNumber = (imgNumber) => { return Math.floor(Math.random() * imgNumber) };

function collectRandomNumbers(imgNumber) {
    let numbers = [];
    for (let i = 0; i < imgNumber; i++) {
        numbers.push(randomNumber(imgNumber));
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

function verifyRandomNumbersNotEqual(imgNumber) {
    imgNumber = (document.getElementById('imgNumberPicker').value)*2;
    let numbers = collectRandomNumbers(imgNumber);
    while (isNotEqualNumbers(numbers)) {
        console.log(numbers);
        numbers = collectRandomNumbers(imgNumber);
    }
    return numbers;
}

function imgArrayUploadHtml (imgNumbersArray) {
    imgHolderDiv.innerHTML = "";
    imgNumbersArray.forEach(img => {
        const wrapper = document.createElement('div');
        wrapper.innerHTML = [
            `<div class="rounded bg-light" style="width: 5rem; height: 5rem;">`,
            `   <p class="mx-auto my-auto text-center fs-1">${img}.</p>`,
            '</div>'
        ].join('');
        imgHolderDiv.append(wrapper);
    });
}

function generatingImgPairs(){
    let imgNumbersArray = verifyRandomNumbersNotEqual((document.getElementById('imgNumberPicker').value)*2);
    imgArrayUploadHtml(imgNumbersArray);
}

