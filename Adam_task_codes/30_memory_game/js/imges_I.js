"use strict";
class GuitarsImages {
    constructor(name, isItUp) {
        this.name = name;
        this.isItUp = false;
        this.imgPath = `img/guitars/${this.name}.jpg`;
        this.bgImgPath = "img/guitars/bg.jpg";
    }
    get guitarName() {
        return this.name;
    }
    set guitarName(name) {
        this.name = name;
    }
    get guitarIsItUp() {
        return this.isItUp;
    }
    set guitarIsItUp(isItUp) {
        this.isItUp = isItUp;
    }
    get guitarImgPath() {
        return this.imgPath;
    }
    set guitarImgPath(imgPath) {
        this.imgPath = imgPath;
    }
    get guitarBgImgPath() {
        return this.bgImgPath;
    }
    set guitarBgImgPath(bgImgPath) {
        this.bgImgPath = bgImgPath;
    }
}
