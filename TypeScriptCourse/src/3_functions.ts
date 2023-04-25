// Type Aliases
type stringOrNumber = string | number;
type stringOrNumberArray = (string | number)[];

// type Guitarist = {
//     name?: string,
//     active: boolean,
//     albums: stringOrNumberArray
// }

type UserId = stringOrNumber;

// Literal Types
let literalName: 'John';
let userName: 'Dave' | 'John' | 'Amy';

userName = 'Amy';

// Functions
const add = (a: number, b: number): number => a + b;
const logMsg = (message: any): void => console.log(message);

logMsg('Hello World');
logMsg(add(2, 3));

function subtract (a: number, b: number): number {
    return a - b;
}

logMsg(subtract(5, 2));

type mathFunction = (a: number, b: number) => number;
// interface mathFunction {
//     (a: number, b: number): number
// }

const multiply: mathFunction = (a, b) => a * b;

logMsg(multiply(2, 3));

// Optional Parameters
const addNumbers = (a: number, b: number, c?: number): number => a + b + (c ?? 0);

logMsg(addNumbers(7, 7));
logMsg(addNumbers(7, 7, 7));

// Default Parameters
const addNumbers2 = (a: number, b: number, c: number = 0): number => a + b + c;

logMsg(addNumbers2(7, 7));

// Rest Parameters
const addAll = (...numbers: number[]): number => numbers.reduce((a, b) => a + b, 0);

logMsg(addAll(1, 2, 3, 4, 5));

// Never Type
const createError = (errMsg: string) => {
    throw new Error(errMsg);
}

// const infiniteLoop = () => {
//     while (true) {}
// }

const isNumber = (value: any): boolean => typeof value === 'number';

const numberOrString = (value: number | string): string => {
    if (typeof value === 'string') return 'string';
    if (isNumber(value)) return 'number';
    
    return createError('Value is not a string or number');
}