const inputHandler = new InputHandler('imgNumberPicker');
(<HTMLInputElement> document.getElementById("executeBtn")).disabled = false;

const alertPlaceholder:any = document.getElementById('liveAlertPlaceholder');
const alertResultTrip = (message:string, state:string) => {
    alertPlaceholder!.innerHTML = "";
    let wrapper:any = alertPlaceholder;
    wrapper.innerHTML = [
        `<div class="alert alert-${state} mx-auto p-2 border border-3 border-${state}" role="alert" style="opacity: 1; transition: opacity 1s;>`,
        `   <span class="text-center fs-2 fw-semibold text-${state}">${message}</span>`,
        '</div>'
    ].join('');
}

function getIdValidateRequest():string {
    let id:any = [];
    document.querySelectorAll(`#inputDiv input`).forEach((req:any) => {
        if (req.required == true) {
            id.push(req.id);
        };
    });
    return id;
}

function isValidateData(x:any):boolean {
    let isValueAllRequestedInputs:boolean = true;
    x.forEach((req: any) => {
        if (!parseDataFrom(req) || parseDataFrom(req) > 25) {
            isValueAllRequestedInputs = false;
        }
    });
    return isValueAllRequestedInputs;
}

function parseDataFrom(idfrom:string):any {
    let data: any = (document.getElementById(idfrom) as HTMLInputElement).value;
    return data;
}

/****************************************************************************************************** */

const imgHolderDiv = document.getElementById('imgHolderDiv');

function generatedCards(numberOfCards:any):number[] {
    let randomPic:number[] = [];
    do {
        let randomNumber:number = Math.floor(Math.random() * (Number(numberOfCards)));
        if (!randomPic.includes(randomNumber)) {
            randomPic.push(randomNumber);
        }
    } while (randomPic.length != numberOfCards);
    return randomPic;
}

function doImgPathPairs(imgArr:Array<any>):Array<any>{
    imgArr.forEach(img => {
        let imgNumber:string = img.guitarName.slice(-2); 
        if (imgNumber != '00' && imgNumber != '01' && Number(imgNumber)%2 !=0) {
            let temp:number = Number(imgNumber);
            temp = (temp-1)/2;
            img.guitarImgPath = `img/guitars/img${('0' + (temp)).slice(-2)}.jpg`;
        } else if (imgNumber == '01') {
            img.guitarImgPath  = "img/guitars/img00.jpg";
        } else {
            let temp:number = Number(imgNumber);
            temp = (temp)/2;
            img.guitarImgPath = `img/guitars/img${('0' + (temp)).slice(-2)}.jpg`;
        }
    });
    return imgArr;
}

function imgArrayUploadHtml(imgNumbersArr:number[],imgArr:Array<any>):void {
    imgHolderDiv!.innerHTML = "";
    imgHolderDiv?.classList.remove("border", "border-3", "border-dark", "bg-dark");
    imgArr.forEach(img => {
        let wrapper = imgHolderDiv;
        wrapper!.innerHTML += [
            `<div id="${img.guitarName}" class="fade show rounded bg-light border border-dark border-2 shadow" style="width: 8rem; height: 8rem; background: url('${img.guitarBgImgPath}') no-repeat; background-size: cover; backround-color:#000; transition: opacity 0.3s linear !important;">`,
            '</div>'
        ].join('');
    });
    startGame(imgNumbersArr,imgArr);
}

function validateGeneratingImgPairs(imgArrLength:number):boolean {
    let isItGenerate:boolean = false;
    if (imgArrLength > 25 || imgArrLength == 0 ) {
        alertResultTrip("Nem megfelelő számot adott meg! (1-25)","danger");
    } else if (isValidateData(getIdValidateRequest())) {
        (<HTMLInputElement> document.getElementById("executeBtn")).disabled = true;
        isItGenerate = true;
    } else {
        alertResultTrip("Hiányzó adat, adatok! (1-25)","danger");
    }
    return isItGenerate;
}

function fillImgArrClass (imgArrLength:number):Array<any>{
    let imgArr:Array<any> = [];
    for (let i = 0; i < imgArrLength; i++) {
        imgArr.push(new GuitarsImages(`img${('0' + (i)).slice(-2)}`));
    }
    imgArr = doImgPathPairs(imgArr);
    return imgArr;
}

function randomizeImg (imgNumbersArr:number[],imgArr:Array<any>):Array<any>{
    let randomImgArr:Array<any> = [];
    imgNumbersArr.forEach(img => {
        randomImgArr.push(imgArr[img]);
    });
    return randomImgArr;
}

function imgArrayUpload ():void {
    let imgArrLength:number = parseDataFrom(getIdValidateRequest()); 
    if (validateGeneratingImgPairs(imgArrLength)){
        alertPlaceholder!.innerHTML = "";
        let imgNumbersArray:number[] = generatedCards(imgArrLength*2);
        imgArrayUploadHtml(imgNumbersArray,randomizeImg(imgNumbersArray, fillImgArrClass(imgArrLength*2)));
    }
}

/************************ Game ***************************/

function startGame(imgNumbersArr:number[],imgArr:Array<any>){
    (<HTMLElement> document.getElementById("containerChoose")).classList.remove("show");
    (<HTMLElement> document.getElementById("containerChoose")).classList.add("d-none");
    let isItPairs:any = isItPair(imgArr);
}

function isItPair(imgArr:Array<any>):any {
    let isItPair:boolean = false;
    let counter:number = 0;
    let tempImgPath:any, tempImgName:string;
    let imgHolderDiv:any = (<HTMLDivElement> document.getElementById("imgHolderDiv"));
    do {((imgHolderDiv.querySelectorAll(":scope> .rounded"))).forEach((imgDiv:any) => {
        imgDiv.addEventListener('click', function () {
            imgArr.filter(img => {
                if (!img.guitarIsItUp && img.guitarName === imgDiv.id && counter == 1 && img.guitarImgPath == tempImgPath) {
                    counter += 1;
                    isItPair = true;
                    img.guitarIsItUp = true;
                    (<HTMLDivElement> document.getElementById(img.guitarName)).classList.remove("show");
                    (<HTMLDivElement> document.getElementById(img.guitarName)).style.backgroundImage = `url('${img.guitarImgPath}')`;
                    (<HTMLDivElement> document.getElementById(img.guitarName)).classList.add("show");
                    setTimeout(() => {
                        thatWasAll(imgArr);
                    }, 1500);
                } else if (!img.guitarIsItUp && img.guitarName === imgDiv.id && counter < 1){
                    tempImgPath = img.guitarImgPath;
                    tempImgName = img.guitarName;
                    counter += 1;
                    img.guitarIsItUp = true;
                    (<HTMLDivElement> document.getElementById(img.guitarName)).classList.remove("show");
                    (<HTMLDivElement> document.getElementById(img.guitarName)).style.backgroundImage = `url('${img.guitarImgPath}')`;
                    (<HTMLDivElement> document.getElementById(img.guitarName)).classList.add("show");
                } else if (!img.guitarIsItUp && img.guitarName === imgDiv.id && counter == 1 && img.guitarImgPath != tempImgPath) {
                    counter += 1;
                    img.guitarIsItUp = true;
                    (<HTMLDivElement> document.getElementById(img.guitarName)).classList.remove("show");
                    (<HTMLDivElement> document.getElementById(img.guitarName)).style.backgroundImage = `url('${img.guitarImgPath}')`;
                    (<HTMLDivElement> document.getElementById(img.guitarName)).classList.add("show");
                    setTimeout(() => {
                        theyAreNotPair(tempImgName, img.guitarName,imgArr);
                      }, 1500);
                    
                } 
            }); 
        })
    })} while (counter>1);
}

function theyAreNotPair (firstImgName:string,secondImgName:string,imgArr:Array<any>){
    imgArr.forEach(img => {
        if (img.guitarName == firstImgName) {
            img.guitarIsItUp = false;
            (<HTMLDivElement> document.getElementById(img.guitarName)).classList.remove("show");
            (<HTMLDivElement> document.getElementById(img.guitarName)).style.backgroundImage = `url('${img.guitarBgImgPath}')`;
            (<HTMLDivElement> document.getElementById(img.guitarName)).classList.add("show");
        } else if (img.guitarName == secondImgName) {
            img.guitarIsItUp = false;
            (<HTMLDivElement> document.getElementById(img.guitarName)).classList.remove("show");
            (<HTMLDivElement> document.getElementById(img.guitarName)).style.backgroundImage = `url('${img.guitarBgImgPath}')`;
            (<HTMLDivElement> document.getElementById(img.guitarName)).classList.add("show");
        }
    })
    isItPair(imgArr);
}

function thatWasAll(imgArr:Array<any>){
    let counter:number = 0;
    imgArr.forEach(img => {
        if (!img.guitarIsItUp) {
            counter += 1;
        }
    });
    if (counter == 0) {
        alertResultTrip("Gratulálok, nyertél!","success fs-2");
        setTimeout(() => {
            alertResultTrip("Az új játék 5 másodperc múlva indul","light fs-2");
        }, 3500);
        setTimeout(() => {
        location.reload();
        }, 8500);
    } else {
        isItPair(imgArr);
    }
}