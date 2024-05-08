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
        this.path = "/img/guitars/";
    }
    get guitarName():string {
        return this.name;
    }
    set guitarName(name:string) {
        this.name = name;
    }


    set guitarIsItUp(isItUp:boolean) {
        this.isItUp = isItUp;
    }
    get guitarIsItUp():boolean {
        return this.isItUp;
    }

    get guitarPath():string | undefined {
        return this.path;
    }
}