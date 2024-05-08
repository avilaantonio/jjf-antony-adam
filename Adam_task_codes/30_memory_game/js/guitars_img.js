"use strict";
class GuitarsImages {
    constructor(name, isItUp) {
        this.name = name;
        this.isItUp = isItUp;
    }
    set GuitarName(name) {
        this.name = name;
    }
    get GuitarName() {
        return this.name;
    }
    set guitarIsItUp(isItUp) {
        this.isItUp = isItUp;
    }
    get guitarIsItUp() {
        return this.isItUp;
    }
}
