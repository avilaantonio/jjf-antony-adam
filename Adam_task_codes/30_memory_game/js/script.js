"use strict";
const inputHandler = new InputHandler('imgNumberPicker');
document.getElementById("executeBtn").disabled = false;
const alertPlaceholder = document.getElementById('liveAlertPlaceholder');
const alertResultTrip = (message, state) => {
    alertPlaceholder.innerHTML = "";
    let wrapper = alertPlaceholder;
    wrapper.innerHTML = [
        `<div class="alert alert-${state} mx-auto p-2 border border-3 border-${state}" role="alert" style="opacity: 1; transition: opacity 1s;>`,
        `   <span class="text-center fs-2 fw-semibold text-${state}">${message}</span>`,
        '</div>'
    ].join('');
};
function getIdValidateRequest() {
    let id = [];
    document.querySelectorAll(`#inputDiv input`).forEach((req) => {
        if (req.required == true) {
            id.push(req.id);
        }
        ;
    });
    return id;
}
function isValidateData(x) {
    let isValueAllRequestedInputs = true;
    x.forEach((req) => {
        if (!parseDataFrom(req) || parseDataFrom(req) > 25) {
            isValueAllRequestedInputs = false;
        }
    });
    return isValueAllRequestedInputs;
}
function parseDataFrom(idfrom) {
    let data = document.getElementById(idfrom).value;
    return data;
}
/****************************************************************************************************** */
const imgHolderDiv = document.getElementById('imgHolderDiv');
function generatedCards(numberOfCards) {
    let randomPic = [];
    do {
        let randomNumber = Math.floor(Math.random() * (Number(numberOfCards)));
        if (!randomPic.includes(randomNumber)) {
            randomPic.push(randomNumber);
        }
    } while (randomPic.length != numberOfCards);
    return randomPic;
}
function doImgPathPairs(imgArr) {
    imgArr.forEach(img => {
        let imgNumber = img.guitarName.slice(-2);
        if (imgNumber != '00' && imgNumber != '01' && Number(imgNumber) % 2 != 0) {
            let temp = Number(imgNumber);
            temp = (temp - 1) / 2;
            img.guitarImgPath = `img/guitars/img${('0' + (temp)).slice(-2)}.jpg`;
        }
        else if (imgNumber == '01') {
            img.guitarImgPath = "img/guitars/img00.jpg";
        }
        else {
            let temp = Number(imgNumber);
            temp = (temp) / 2;
            img.guitarImgPath = `img/guitars/img${('0' + (temp)).slice(-2)}.jpg`;
        }
    });
    return imgArr;
}
function imgArrayUploadHtml(imgNumbersArr, imgArr) {
    imgHolderDiv.innerHTML = "";
    imgHolderDiv === null || imgHolderDiv === void 0 ? void 0 : imgHolderDiv.classList.remove("border", "border-3", "border-dark", "bg-dark");
    imgArr.forEach(img => {
        let wrapper = imgHolderDiv;
        wrapper.innerHTML += [
            `<div id="${img.guitarName}" class="fade show rounded bg-light border border-dark border-2 shadow" style="width: 8rem; height: 8rem; background: url('${img.guitarBgImgPath}') no-repeat; background-size: cover; backround-color:#000; transition: opacity 0.3s linear !important;">`,
            '</div>'
        ].join('');
    });
    startGame(imgNumbersArr, imgArr);
}
function validateGeneratingImgPairs(imgArrLength) {
    let isItGenerate = false;
    if (imgArrLength > 25 || imgArrLength == 0) {
        alertResultTrip("Nem megfelelő számot adott meg! (1-25)", "danger");
    }
    else if (isValidateData(getIdValidateRequest())) {
        document.getElementById("executeBtn").disabled = true;
        isItGenerate = true;
    }
    else {
        alertResultTrip("Hiányzó adat, adatok! (1-25)", "danger");
    }
    return isItGenerate;
}
function fillImgArrClass(imgArrLength) {
    let imgArr = [];
    for (let i = 0; i < imgArrLength; i++) {
        imgArr.push(new GuitarsImages(`img${('0' + (i)).slice(-2)}`));
    }
    imgArr = doImgPathPairs(imgArr);
    return imgArr;
}
function randomizeImg(imgNumbersArr, imgArr) {
    let randomImgArr = [];
    imgNumbersArr.forEach(img => {
        randomImgArr.push(imgArr[img]);
    });
    return randomImgArr;
}
function imgArrayUpload() {
    let imgArrLength = parseDataFrom(getIdValidateRequest());
    if (validateGeneratingImgPairs(imgArrLength)) {
        alertPlaceholder.innerHTML = "";
        let imgNumbersArray = generatedCards(imgArrLength * 2);
        imgArrayUploadHtml(imgNumbersArray, randomizeImg(imgNumbersArray, fillImgArrClass(imgArrLength * 2)));
    }
}
/************************ Game ***************************/
function startGame(imgNumbersArr, imgArr) {
    document.getElementById("containerChoose").classList.remove("show");
    document.getElementById("containerChoose").classList.add("d-none");
    let isItPairs = isItPair(imgArr);
}
function isItPair(imgArr) {
    let isItPair = false;
    let counter = 0;
    let tempImgPath, tempImgName;
    let imgHolderDiv = document.getElementById("imgHolderDiv");
    do {
        ((imgHolderDiv.querySelectorAll(":scope> .rounded"))).forEach((imgDiv) => {
            imgDiv.addEventListener('click', function () {
                imgArr.filter(img => {
                    if (!img.guitarIsItUp && img.guitarName === imgDiv.id && counter == 1 && img.guitarImgPath == tempImgPath) {
                        counter += 1;
                        isItPair = true;
                        img.guitarIsItUp = true;
                        document.getElementById(img.guitarName).classList.remove("show");
                        document.getElementById(img.guitarName).style.backgroundImage = `url('${img.guitarImgPath}')`;
                        document.getElementById(img.guitarName).classList.add("show");
                        setTimeout(() => {
                            thatWasAll(imgArr);
                        }, 1500);
                    }
                    else if (!img.guitarIsItUp && img.guitarName === imgDiv.id && counter < 1) {
                        tempImgPath = img.guitarImgPath;
                        tempImgName = img.guitarName;
                        counter += 1;
                        img.guitarIsItUp = true;
                        document.getElementById(img.guitarName).classList.remove("show");
                        document.getElementById(img.guitarName).style.backgroundImage = `url('${img.guitarImgPath}')`;
                        document.getElementById(img.guitarName).classList.add("show");
                    }
                    else if (!img.guitarIsItUp && img.guitarName === imgDiv.id && counter == 1 && img.guitarImgPath != tempImgPath) {
                        counter += 1;
                        img.guitarIsItUp = true;
                        document.getElementById(img.guitarName).classList.remove("show");
                        document.getElementById(img.guitarName).style.backgroundImage = `url('${img.guitarImgPath}')`;
                        document.getElementById(img.guitarName).classList.add("show");
                        setTimeout(() => {
                            theyAreNotPair(tempImgName, img.guitarName, imgArr);
                        }, 1500);
                    }
                });
            });
        });
    } while (counter > 1);
}
function theyAreNotPair(firstImgName, secondImgName, imgArr) {
    imgArr.forEach(img => {
        if (img.guitarName == firstImgName) {
            img.guitarIsItUp = false;
            document.getElementById(img.guitarName).classList.remove("show");
            document.getElementById(img.guitarName).style.backgroundImage = `url('${img.guitarBgImgPath}')`;
            document.getElementById(img.guitarName).classList.add("show");
        }
        else if (img.guitarName == secondImgName) {
            img.guitarIsItUp = false;
            document.getElementById(img.guitarName).classList.remove("show");
            document.getElementById(img.guitarName).style.backgroundImage = `url('${img.guitarBgImgPath}')`;
            document.getElementById(img.guitarName).classList.add("show");
        }
    });
    isItPair(imgArr);
}
function thatWasAll(imgArr) {
    let counter = 0;
    imgArr.forEach(img => {
        if (!img.guitarIsItUp) {
            counter += 1;
        }
    });
    if (counter == 0) {
        alertResultTrip("Gratulálok, nyertél!", "success fs-2");
        setTimeout(() => {
            alertResultTrip("Az új játék 5 másodperc múlva indul", "light fs-2");
        }, 3500);
        setTimeout(() => {
            location.reload();
        }, 8500);
    }
    else {
        isItPair(imgArr);
    }
}
