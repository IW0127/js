/* class ObjectCreator {
    #meaningOfLife;

    constructor(name) {
        this.#meaningOfLife = 42;
    }

    returnMeaningOfLife() {
        return this.#meaningOfLife;
    }

    #returnAMessage() {
        console.log("You will do great things in life");
    }
    privetMethod() {
        this.#returnAMessage();
    }

}

const myObject = new ObjectCreator("Parwinder");
console.log(myObject.returnMeaningOfLife());
console.log(myObject["#meaningOfLife"]);
myObject.privetMethod(); */


class Parent {
    // constructor() {
    //     // if 'autoPlay' exists (was implemented) in chain
    //     if (this.autoPlay) {
    //         this.autoPlay(); // execute from parent
    //     }
    // }
    _d = 0;
    _autoPlay() {
        console.log('parent');
    }
}

class ChildA extends Parent {
    autoPlays() {
        this._d = 20;
        console.log(this._d);
    }
}


const childA = new ChildA();
childA.autoPlays();