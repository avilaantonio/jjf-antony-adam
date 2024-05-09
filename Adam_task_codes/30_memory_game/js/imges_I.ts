interface InterfaceImages {
    name:string;
    isItUp:boolean;
    path:string;
}

class GuitarsImages implements InterfaceImages {
    name:string;
    isItUp:boolean;
    path:string;
    constructor(name:string, isItUp?:boolean) {
        this.name = name;
        this.isItUp = false;
        this.path = `img/guitars/${this.name}.jpg`;
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
    get guitarPath():string | undefined {
        return this.path;
    }
    set guitarPath(path:string) {
        this.path = path;
    }
}