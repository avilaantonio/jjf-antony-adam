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
    return id;
}
function isValidateData(x) {
    let isValueAllRequestedInputs = true;
    x.forEach((req) => {
        if (!parseDataFrom(req) || parseDataFrom(req) > 18) {
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
    imgArr.forEach(img => {
        let wrapper = imgHolderDiv;
        wrapper.innerHTML += [
            `<div id="${img.guitarName}" class="rounded bg-light" style="width: 8rem; height: 8rem; background: url('${img.guitarBgImgPath}') no-repeat; background-size: cover; backround-color:#fff;">`,
            '</div>'
        ].join('');
    });
    startGame(imgNumbersArr, imgArr);
}
function validateGeneratingImgPairs(imgArrLength) {
    let isItGenerate = false;
    if (imgArrLength > 18 || imgArrLength == 0) {
        alertResultTrip("Nem megfelelő számot adott meg!");
    }
    else if (isValidateData(getIdValidateRequest())) {
        document.getElementById("executeBtn").disabled = true;
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
function startGame(imgNumbersArr, imgArr) {
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
                        document.getElementById(img.guitarName).style.backgroundImage = `url('${img.guitarImgPath}')`;
                        setTimeout(() => {
                            thatWasAll(imgArr);
                        }, 1500);
                    }
                    else if (!img.guitarIsItUp && img.guitarName === imgDiv.id && counter < 1) {
                        tempImgPath = img.guitarImgPath;
                        tempImgName = img.guitarName;
                        counter += 1;
                        img.guitarIsItUp = true;
                        document.getElementById(img.guitarName).style.backgroundImage = `url('${img.guitarImgPath}')`;
                    }
                    else if (!img.guitarIsItUp && img.guitarName === imgDiv.id && counter == 1 && img.guitarImgPath != tempImgPath) {
                        counter += 1;
                        img.guitarIsItUp = true;
                        document.getElementById(img.guitarName).style.backgroundImage = `url('${img.guitarImgPath}')`;
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
            document.getElementById(img.guitarName).style.backgroundImage = `url('${img.guitarBgImgPath}')`;
        }
        else if (img.guitarName == secondImgName) {
            img.guitarIsItUp = false;
            document.getElementById(img.guitarName).style.backgroundImage = `url('${img.guitarBgImgPath}')`;
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
        alertResultTrip("Gratulálok, nyertél!");
    }
    else {
        isItPair(imgArr);
    }
}
