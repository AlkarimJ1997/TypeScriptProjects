// Type Casting or Type Assertions are interchangeable terms
type One = string;
type Two = string | number;
type Three = 'hello';

// Converting to more or less specific type
let a: One = 'hello';
let b = a as Two; // less specific
let c = a as Three; // more specific

// Other syntax (doesn't work with React)
let d = <One>'world';
let e = <string | number>'world';

const addOrConcat = (a: number, b: number, c: 'add' | 'concat'): number | string => {
    if (c === 'add') return a + b;

    return `${a}${b}`;
}

let myVal: string = addOrConcat(2, 2, 'concat') as string;

// Be careful (TypeScript sees no problem, but this is a string not a number)
let nextVal: number = addOrConcat(2, 2, 'concat') as number;

// Force Casting (not recommended)
(10 as unknown) as string;

// Working with the DOM
const el = document.querySelector('#myId'); // Element | null
const img = document.querySelector('img')!; // ! is the non-null assertion operator
const myImg = document.getElementById('#img') as HTMLImageElement;

if (img) img.src = 'https://picsum.photos/200';
if (myImg) myImg.src = 'https://picsum.photos/200';