/*

Enums:
    - Unlike most Typescript features, Enums are not a type-level addition to JavaScript but something added to the language at runtime.

*/

enum Grade {
    U = 1,
    D,
    C,
    B,
    A
}

console.log(Grade.U); // 0