"use strict";
const inputHandler = new InputHandler('imgNumberPicker');
document.getElementById("executeBtn").disabled = false;
const alertPlaceholder = document.getElementById('liveAlertPlaceholder');
const alertResultTrip = (message) => {
    alertPlaceholder.innerHTML = "";
    let wrapper = alertPlaceholder;
    wrapper.innerHTML = [
        `<div class="alert alert-danger alert-dismissible fade show mt-3 mx-auto p-3 border border-2 border-danger" role="alert">`,
        `   <span class="text-center fs-5 fw-semibold text-danger">${message}</span>`,
        '</div>'
    ].join('');
};
function getIdValidateRequest() {
    let id = [];
    document.querySelectorAll(`body>div>div>div>div input, select`).forEach((req) => {
        if (req.required == true) {
            id.push(req.id);
        }
        ;
    });
    //console.log(id);
    return id;
}
function isValidateData(x) {
    let isValueAllRequestedInputs = true;
    console.log(parseDataFrom(x));
    x.forEach((req) => {
        if (!parseDataFrom(req) || parseDataFrom(req) > 18) {
            isValueAllRequestedInputs = false;
        }
    });
    console.log(isValueAllRequestedInputs);
    return isValueAllRequestedInputs;
}
function parseDataFrom(idfrom) {
    //console.log(idfrom);
    let data = document.getElementById(idfrom).value;
    //console.log(data, typeof (data));
    return data;
}
/****************************************************************************************************** */
const imgHolderDiv = document.getElementById('imgHolderDiv');
function generatedCards(numberOfCards) {
    let randomPic = [];
    do {
        let randomNumber = Math.floor(Math.random() * (Number(numberOfCards)));
        //console.log(randomNumber);
        if (!randomPic.includes(randomNumber)) {
            randomPic.push(randomNumber);
            //console.log(randomPic);
        }
    } while (randomPic.length != numberOfCards);
    //console.log(randomPic);
    return randomPic;
}
function doImgPathPairs(imgArr) {
    imgArr.forEach(img => {
        let imgNumber = img.guitarName.slice(-2);
        if (imgNumber != '00' && imgNumber != '01' && Number(imgNumber) % 2 != 0) {
            let temp = Number(imgNumber);
            temp = (temp - 1) / 2;
            console.log(temp);
            img.guitarPath = `img/guitars/img${('0' + (temp)).slice(-2)}.jpg`;
        }
        else if (imgNumber == '01') {
            img.guitarPath = "img/guitars/img00.jpg";
        }
        else {
            let temp = Number(imgNumber);
            temp = (temp) / 2;
            img.guitarPath = `img/guitars/img${('0' + (temp)).slice(-2)}.jpg`;
        }
    });
    return imgArr;
}
function imgArrayUploadHtml(imgArr) {
    imgHolderDiv.innerHTML = "";
    imgArr.forEach(img => {
        let wrapper = imgHolderDiv;
        wrapper.innerHTML += [
            `<div class="rounded bg-light" style="width: 8rem; height: 8rem; background: url('${img.guitarPath}') no-repeat; background-size: cover;">`,
            '</div>'
        ].join('');
    });
}
function validateGeneratingImgPairs(imgArrLength) {
    let isItGenerate = false;
    if (imgArrLength > 18 || imgArrLength == 0) {
        alertResultTrip("Nem megfelelő számot adott meg!");
    }
    else if (isValidateData(getIdValidateRequest())) {
        isItGenerate = true;
    }
    else {
        alertResultTrip("Hiányzó adat, adatok!");
    }
    return isItGenerate;
}
function fillImgArrClass(imgArrLength) {
    let imgArr = [];
    for (let i = 0; i < imgArrLength; i++) {
        imgArr.push(new GuitarsImages(`img${('0' + (i)).slice(-2)}`));
    }
    imgArr = doImgPathPairs(imgArr);
    console.log(imgArr);
    return imgArr;
}
function randomizeImg(imgNumbersArr, imgArr) {
    let randomImgArr = [];
    imgNumbersArr.forEach(img => {
        randomImgArr.push(imgArr[img]);
    });
    console.log(randomImgArr);
    return randomImgArr;
}
function imgArrayUpload() {
    let imgArrLength = parseDataFrom(getIdValidateRequest());
    if (validateGeneratingImgPairs(imgArrLength)) {
        alertPlaceholder.innerHTML = "";
        let imgNumbersArray = generatedCards(imgArrLength * 2);
        imgArrayUploadHtml(randomizeImg(imgNumbersArray, fillImgArrClass(imgArrLength * 2)));
    }
}
