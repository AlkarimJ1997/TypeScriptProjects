let stringArr = ["a", "b", "c"];
let guitars = ["Strat", "Les Paul", 5150];
let mixedData = ["EVH", 1984, true];

/*
stringArr[0] = 42;
Error: Type 'number' is not assignable to type 'string'.
*/

stringArr[0] = 'John';
stringArr.push('Hey');

guitars[0] = 1984;
guitars.unshift('Jim');

/*
stringArr = guitars;
Error: Type '(string | number)[]' is not assignable to type 'string[]'.
*/

guitars = stringArr;

let test = []; // any[]
let bands: string[] = []; // string[]

bands.push('Van Halen');

// Tuples
let myTuple: [string, number, boolean] = ["Dave", 42, true];
let mixed = ["John", 1, false];

/*
myTuple = ["Dave", 42, true, "John"];
Error: Type '[string, number, boolean, string]' is not assignable to type '[string, number, boolean]'.
*/

myTuple[1] = 42;

// Objects
let myObj: object = { name: "Dave", age: 42 };

myObj = []; // this is because in JS, arrays are of type object
console.log(typeof myObj); // object

myObj = bands;
myObj = {};

const exampleObj = {
    prop1: "Dave",
    prop2: true,
}

const explicitObj: { prop1: string, prop2: boolean } = {
    prop1: "Dave",
    prop2: true,
}

// interface Guitarist {
//     name?: string,
//     active: boolean,
//     albums: (string | number)[]
// }

// let evh: Guitarist = {
//     name: "Eddie Van Halen",
//     active: false,
//     albums: [1984, 5150, "OU812"]
// }

// let jp: Guitarist = {
//     //name: "Jimmy",
//     active: true,
//     albums: ["I", "II", "IV"]
// }

// //evh = jp;
// const greetGuitarist = (guitarist: Guitarist) => {
//     if (!guitarist.name) return "Hello!";

//     return `Hello ${guitarist.name.toUpperCase()}`;
// }

// console.log(greetGuitarist(jp));