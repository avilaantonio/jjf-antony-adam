"use strict";
class GuitarsImages {
    constructor(name, isItUp) {
        this.name = name;
        this.isItUp = false;
        this.path = `img/guitars/${this.name}.jpg`;
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
    get guitarPath() {
        return this.path;
    }
    set guitarPath(path) {
        this.path = path;
    }
}
