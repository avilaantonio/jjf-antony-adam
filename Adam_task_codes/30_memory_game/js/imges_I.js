"use strict";
class GuitarsImages {
    constructor(name, isItUp) {
        this.name = name;
        this.isItUp = false;
        this.path = "/img/guitars/";
    }
    get guitarName() {
        return this.name;
    }
    set guitarName(name) {
        this.name = name;
    }
    set guitarIsItUp(isItUp) {
        this.isItUp = isItUp;
    }
    get guitarIsItUp() {
        return this.isItUp;
    }
    get guitarPath() {
        return this.path;
    }
}
