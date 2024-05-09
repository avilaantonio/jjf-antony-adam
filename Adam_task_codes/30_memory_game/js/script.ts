const inputHandler = new InputHandler('imgNumberPicker');
(<HTMLInputElement> document.getElementById("executeBtn")).disabled = false;

const alertPlaceholder:any = document.getElementById('liveAlertPlaceholder');
const alertResultTrip = (message:string) => {
    alertPlaceholder!.innerHTML = "";
    let wrapper:any = alertPlaceholder;
    wrapper.innerHTML = [
        `<div class="alert alert-danger alert-dismissible fade show mt-3 mx-auto p-3 border border-2 border-danger" role="alert">`,
        `   <span class="text-center fs-5 fw-semibold text-danger">${message}</span>`,
        '</div>'
    ].join('');
}

function getIdValidateRequest():string {
    let id:any = [];
    document.querySelectorAll(`body>div>div>div>div input, select`).forEach((req:any) => {
        if (req.required == true) {
            id.push(req.id);
        };
    });
    //console.log(id);
    return id;
}

function isValidateData(x:any):boolean {
    let isValueAllRequestedInputs:boolean = true;
    console.log(parseDataFrom(x));
    x.forEach((req: any) => {
        if (!parseDataFrom(req) || parseDataFrom(req) > 18) {
            isValueAllRequestedInputs = false;
        }
    });
    console.log(isValueAllRequestedInputs);
    return isValueAllRequestedInputs;
}

function parseDataFrom(idfrom:string):any {
    //console.log(idfrom);
    let data: any = (document.getElementById(idfrom) as HTMLInputElement).value;
    //console.log(data, typeof (data));
    return data;
}

/****************************************************************************************************** */

const imgHolderDiv = document.getElementById('imgHolderDiv');

function generatedCards(numberOfCards:any):number[] {
    let randomPic:number[] = [];
    do {
        let randomNumber:number = Math.floor(Math.random() * (Number(numberOfCards)));
        //console.log(randomNumber);
        if (!randomPic.includes(randomNumber)) {
            randomPic.push(randomNumber);
            //console.log(randomPic);
        }
    } while (randomPic.length != numberOfCards);
    //console.log(randomPic);
    return randomPic;
}

function doImgPathPairs(imgArr:Array<any>):Array<any>{
    imgArr.forEach(img => {
        let imgNumber:string = img.guitarName.slice(-2); 
        if (imgNumber != '00' && imgNumber != '01' && Number(imgNumber)%2 !=0) {
            let temp:number = Number(imgNumber);
            temp = (temp-1)/2;
            console.log(temp);
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
    imgArr.forEach(img => {
        let wrapper = imgHolderDiv;
        wrapper!.innerHTML += [
            `<div id="${img.guitarName}" class="rounded bg-light" style="width: 8rem; height: 8rem; background: url('${img.guitarBgImgPath}') no-repeat; background-size: cover; backround-color:#fff;">`,
            '</div>'
        ].join('');
    });
    startGame(imgNumbersArr,imgArr);
}

function validateGeneratingImgPairs(imgArrLength:number):boolean {
    let isItGenerate:boolean = false;
    if (imgArrLength > 18 || imgArrLength == 0 ) {
        alertResultTrip("Nem megfelelő számot adott meg!");
    } else if (isValidateData(getIdValidateRequest())) {
        (<HTMLInputElement> document.getElementById("executeBtn")).disabled = true;
        isItGenerate = true;
    } else {
        alertResultTrip("Hiányzó adat, adatok!");
    }
    return isItGenerate;
}

function fillImgArrClass (imgArrLength:number):Array<any>{
    let imgArr:Array<any> = [];
    for (let i = 0; i < imgArrLength; i++) {
        imgArr.push(new GuitarsImages(`img${('0' + (i)).slice(-2)}`));
    }
    imgArr = doImgPathPairs(imgArr);
    console.log(imgArr);
    return imgArr;
}

function randomizeImg (imgNumbersArr:number[],imgArr:Array<any>):Array<any>{
    let randomImgArr:Array<any> = [];
    imgNumbersArr.forEach(img => {
        randomImgArr.push(imgArr[img]);
    });
    console.log(randomImgArr);
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

function startGame(imgNumbersArr:number[],imgArr:Array<any>){
    (<HTMLElement> document.getElementById("containerChoose")).classList.add("d-none");
    let counter:number = 0;
    let imgHolderDiv:any = (<HTMLDivElement> document.getElementById("imgHolderDiv"));
    ((imgHolderDiv.querySelectorAll(":scope> .rounded"))).forEach((imgDiv:any) => {
        imgDiv.addEventListener('click', function () {
            console.log(imgDiv.id);
            console.log(imgArr);
            imgArr.filter(img => {
                if (!img.guitarIsItUp && img.guitarName === imgDiv.id) {
                    console.log("bent vagyok "+img.guitarIsItUp);
                    (<HTMLDivElement> document.getElementById(img.guitarName)).style.backgroundImage = `url('${img.guitarImgPath}')`;
                }
        });

            
        })
    })
}

