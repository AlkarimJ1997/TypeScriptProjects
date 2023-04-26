// Basic Class
// class Coder {
//     name: string;
//     music: string;
//     age: number;
//     lang: string;

//     constructor(name: string, music: string, age: number, lang: string) {
//         this.name = name;
//         this.music = music;
//         this.age = age;
//         this.lang = lang;
//     }
// }

// Class with Visibility Modifiers (body assignments are not required, but can be used)
class Coder {
    secondLang!: string; // not instantiated right away (use !)

    constructor(
        public readonly name: string,
        public music: string,
        private age: number, // accessible by class only
        protected lang: string = 'TypeScript' // accessible by class and descendants
    ) {}

    getAge = () => `Hello, I'm ${this.age}`;
}

const Dave = new Coder('Dave', 'Rock', 42);

console.log(Dave.getAge());
/*
console.log(Dave.age); // age is private, so not accessible
console.log(Dave.lang); // lang is protected, so not accessible
*/

class WebDev extends Coder {
    constructor(
        public computer: string,
        name: string,
        music: string,
        age: number
    ) {
        super(name, music, age);
    }

    getLang = () => `I write ${this.lang} code`;
}

const Sara = new WebDev('Mac', 'Sara', 'Lofi', 25);

console.log(Sara.getLang());

// Class that implements an interface
interface Musician {
    name: string;
    instrument: string;
    play(action: string): string;
}

class Guitarist implements Musician {
    constructor(public name: string, public instrument: string) {}

    play = (action: string) => `${this.name} ${action} the ${this.instrument}`;
}

const Page = new Guitarist('Jimmy', 'Guitar');

console.log(Page.play('strums'));

// Class with static properties and methods
class Peeps {
    static count: number = 0;
    public id: number;

    constructor(public name: string) {
        this.id = ++Peeps.count;
    }

    static getCount = () => Peeps.count;
}

const John = new Peeps('John');
const Steve = new Peeps('Steve');
const Amy = new Peeps('Amy');

console.log(Peeps.getCount());
console.log(Amy.id);
console.log(Steve.id);
console.log(John.id);

// Classes with Getters and Setters
class Bands {
    private dataState: string[];

    constructor() {
        this.dataState = [];
    }

    // Getter
    get data(): string[] {
        return this.dataState;
    }

    // Setter
    set data(data: string[]) {
        if (!Array.isArray(data) || data.some((item) => typeof item !== 'string')) {
            throw new Error('Data must be an array of strings');
        }

        this.dataState = data;
    }
}

const myBands = new Bands();

myBands.data = ['The Beatles', 'The Rolling Stones', 'The Who'];
console.log(myBands.data);

myBands.data = [...myBands.data, 'The Doors'];
console.log(myBands.data);

// myBands.data = [1, 2, 3]; // throws error
