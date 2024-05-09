interface InterfaceImages {
    name:string;
    isItUp:boolean;
    imgPath:string;
    bgImgPath:string;
}

class GuitarsImages implements InterfaceImages {
    name:string;
    isItUp:boolean;
    imgPath:string;
    bgImgPath:string;
    constructor(name:string, isItUp?:boolean) {
        this.name = name;
        this.isItUp = false;
        this.imgPath = `img/guitars/${this.name}.jpg`;
        this.bgImgPath = "img/guitars/bg.jpg";
    }
    get guitarName():string {
        return this.name;
    }
    set guitarName(name:string) {
        this.name = name;
    }
    get guitarIsItUp():boolean {
        return this.isItUp;
    }
    set guitarIsItUp(isItUp:boolean) {
        this.isItUp = isItUp;
    }
    get guitarImgPath():string | undefined {
        return this.imgPath;
    }
    set guitarImgPath(imgPath:string) {
        this.imgPath = imgPath;
    }
    get guitarBgImgPath():string | undefined {
        return this.bgImgPath;
    }
    set guitarBgImgPath(bgImgPath:string) {
        this.bgImgPath = bgImgPath;
    }
}