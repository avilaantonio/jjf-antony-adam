const inputHandler = new InputHandler('imgNumberPicker');

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
        if (!parseDataFrom(req) || parseDataFrom(req) > 16) {
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

function imgArrayUploadHtml(imgNumbersArray:number[]):void {
    imgHolderDiv!.innerHTML = "";
    imgNumbersArray.forEach(img => {
        let wrapper = imgHolderDiv;
        wrapper!.innerHTML += [
            `<div class="rounded bg-light" style="width: 8rem; height: 8rem;">`,
            `   <p class="mx-auto my-auto text-center fs-1">${img}.</p>`,
            '</div>'
        ].join('');
    });
}

function validateGeneratingImgPairs(imgArrLength:number):boolean {
    let isItGenerate:boolean = false;
    if (imgArrLength > 16 || imgArrLength == 0 ) {
        alertResultTrip("Nem megfelelő számot adott meg!");
    } else if (isValidateData(getIdValidateRequest())) {
        isItGenerate = true;
    } else {
        alertResultTrip("Hiányzó adat, adatok!");
    }
    return isItGenerate;
}

function fillImgArrClass (imgArrLength:number):Array<any>{
    let imgArr:Array<any> = [];
    for (let i = 0; i < imgArrLength; i++) {
        imgArr.push(new GuitarsImages(`#img${('0' + (i)).slice(-2)}`));
    }
    console.log(imgArr);
    return imgArr;
}

function imgArrayUpload ():void {
    let imgArrLength:number = parseDataFrom(getIdValidateRequest()); 
    if (validateGeneratingImgPairs(imgArrLength)){
        alertPlaceholder!.innerHTML = "";
        let imgNumbersArray:number[] = generatedCards(imgArrLength*2);
        imgArrayUploadHtml(imgNumbersArray);
        fillImgArrClass(imgArrLength*2);
    }
    
}



