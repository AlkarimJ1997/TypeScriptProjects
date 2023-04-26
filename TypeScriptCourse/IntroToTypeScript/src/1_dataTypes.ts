// Data Types
let myName = 'Dave';
let newName: string;
let meaningOfLife: number;
let isLoading: boolean;
let album: any; // Any type

//myName = 42; // Error: Type 'number' is not assignable to type 'string'.
newName = 'John';
meaningOfLife = 42;
isLoading = true;
album = 1984; // or 'Van Halen', no error

// Functions
const sum = (a: number, b: string) => a + b;

let postId: string | number; // Union type
let isActive: number | boolean;

let re: RegExp = /ab+c/; // Regular expression (RegExp)