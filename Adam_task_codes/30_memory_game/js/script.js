"use strict";
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
        if (!parseDataFrom(req) || parseDataFrom(req) > 16) {
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
        let randomNumber = Math.floor(Math.random() * (Number(numberOfCards) * 2)) + 1;
        //console.log(randomNumber);
        if (!randomPic.includes(randomNumber)) {
            randomPic.push(randomNumber);
            //console.log(randomPic);
        }
    } while (randomPic.length != numberOfCards);
    //console.log(randomPic);
    return randomPic;
}
function imgArrayUploadHtml(imgNumbersArray) {
    imgHolderDiv.innerHTML = "";
    imgNumbersArray.forEach(img => {
        let wrapper = imgHolderDiv;
        wrapper.innerHTML += [
            `<div class="rounded bg-light" style="width: 8rem; height: 8rem;">`,
            `   <p class="mx-auto my-auto text-center fs-1">${img}.</p>`,
            '</div>'
        ].join('');
    });
}
function generatingImgPairs() {
    if (parseDataFrom(getIdValidateRequest()) > 16) {
        alertResultTrip("Túl nagy számot adott meg!");
    }
    else if (isValidateData(getIdValidateRequest())) {
        alertPlaceholder.innerHTML = "";
        let imgNumbersArray = generatedCards(document.getElementById('imgNumberPicker').value);
        imgArrayUploadHtml(imgNumbersArray);
    }
    else {
        alertResultTrip("Hiányzó adat, adatok!");
    }
}
