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
    let data: any = document.getElementById(idfrom)!.value;
    //console.log(data, typeof (data));
    return data;
}

/****************************************************************************************************** */

const imgHolderDiv = document.getElementById('imgHolderDiv');

function generatedCards(numberOfCards:number):number[] {
    let randomPic:number[] = [];
    do {
        let randomNumber:number = Math.floor(Math.random() * (numberOfCards)) + 1;
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

function generatingImgPairs():void {
    if (parseDataFrom(getIdValidateRequest()) > 16) {
        alertResultTrip("Túl nagy számot adott meg!");
    } else if (isValidateData(getIdValidateRequest())) {
        alertPlaceholder!.innerHTML = "";
        let imgNumbersArray:number[] = generatedCards((document.getElementById('imgNumberPicker')!.value) * 2);
        imgArrayUploadHtml(imgNumbersArray);
    } else {
        alertResultTrip("Hiányzó adat, adatok!");
    }
}