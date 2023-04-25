// Index Signatures (useful for creating objects with dynamic properties)
// interface Transaction {
//     Pizza: number;
//     Books: number;
//     Job: number;
// }
interface Transaction {
    readonly [key: string]: number;
}

const today: Transaction = {
    Pizza: -10,
    Books: -5,
    Job: 50,
};

console.log(today.Pizza);
console.log(today['Pizza']);

// Dynamic Access
let prop: string = 'Pizza';
// console.log(today[prop]); // throws error because no index signature

const netTotal = (transaction: Transaction) => {
    let total = 0;

    for (let key in transaction) {
        total += transaction[key];
    }

    return total;
};

// Better way (but we are using index signatures to show how to do it)
// const netTotal = (transaction: Transaction) => {
//     return Object.values(transaction).reduce((total, value) => total + value, 0);
// };

console.log(netTotal(today));

// today.Pizza = 40; // throws error because readonly

// TypeScript allows the following because it doesn't know the key beforehand
console.log(today['Dave']); // undefined

interface Student {
    //[key: string]: string | number | number[] | undefined,
    name: string;
    GPA: number;
    classes?: number[];
}

const student: Student = {
    name: 'Dave',
    GPA: 3.5,
    classes: [100, 200],
};

// console.log(student.test); // undefined (needs index signature)

// Keyof can be used for dynamic keys without index signatures
for (const key in student) {
    console.log(`${key}: ${student[key as keyof Student]}`);
}

Object.keys(student).forEach((key) => {
    console.log(student[key as keyof typeof student]);
});

const logStudentKey = (student: Student, key: keyof Student) => {
    console.log(`Student ${key}: ${student[key]}`);
};

logStudentKey(student, 'GPA');
logStudentKey(student, 'name');

// interface Incomes {
//     [key: string]: number;
// }

// Useful if you want keys to be a specific set of values
type Streams = 'salary' | 'bonus' | 'sidehustle';
type Incomes = Record<Streams, number | string>; // Record is a utility type

const monthlyIncomes: Incomes = {
    salary: 500,
    bonus: 100,
    sidehustle: 250
}

// Still have to use keyof
for (const revenue in monthlyIncomes) {
    console.log(monthlyIncomes[revenue as keyof Incomes]);
}
