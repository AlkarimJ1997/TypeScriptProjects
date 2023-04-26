/*
    Utility Types
    - Partial
    - Required / Readonly
    - Record
    - Pick / Omit
    - Exclude / Extract
    - Nonnullable
    - ReturnType
    - Parameters
    - Awaited
*/

// Partial
interface Assignment {
    studentId: string;
    title: string;
    grade: number;
    verified?: boolean;
}

const updateAssignment = (
    assignment: Assignment,
    propsToUpdate: Partial<Assignment>
): Assignment => ({ ...assignment, ...propsToUpdate });

const assign1: Assignment = {
    studentId: 'COMPSCI-123',
    title: 'Final Project',
    grade: 0,
};

const assignGraded: Assignment = updateAssignment(assign1, { grade: 95 });

console.log(assignGraded);

// Required and Readonly (requires all properties, even if optional)
const recordAssignment = (assign: Required<Assignment>) => {
    // Send to DB, etc.
    return assign;
};

const assignVerified: Readonly<Assignment> = {
    ...assignGraded,
    verified: true,
};

// assignVerified.studentId = "COMPSCI-456"; // Error - readonly
// recordAssignment(assignGraded); // Error - missing verified

// Record
const hexColorMap: Record<string, string> = {
    red: 'FF0000',
    green: '00FF00',
    blue: '0000FF',
};

type Students = 'Sara' | 'Kelly';
type LetterGrades = 'A' | 'B' | 'C' | 'D' | 'U';

const finalGrades: Record<Students, LetterGrades> = {
    Sara: 'A',
    Kelly: 'B',
};

interface Grades {
    assign1: number;
    assign2: number;
}

const gradeData: Record<Students, Grades> = {
    Sara: { assign1: 95, assign2: 100 },
    Kelly: { assign1: 85, assign2: 90 },
};

// Pick and Omit
type AssignResult = Pick<Assignment, 'studentId' | 'grade'>;

const score: AssignResult = {
    studentId: 'COMPSCI-123',
    grade: 85,
};

type AssignData = Omit<Assignment, 'verified' | 'grade'>;

const assignData: AssignData = {
    studentId: 'COMPSCI-123',
    title: 'Final Project',
};

// Exclude and Extract (used with literal types)
type adjustedGrade = Exclude<LetterGrades, 'U'>;
type highGrades = Extract<LetterGrades, 'A' | 'B'>;

// Nonnullable
type AllPossibleGradees = 'Dave' | 'John' | null | undefined;
type NamesOnly = NonNullable<AllPossibleGradees>;

// ReturnType
// type newAssign = { title: string, points: number };

// const createNewAssign = (title: string, points: number): newAssign => ({ title, points });

// What if we want to change the structure of newAssign?
// We'd have to change both the type and the function.
// Instead, we can use ReturnType to get the type from the function.

const createNewAssign = (title: string, points: number) => ({ title, points });
type NewAssign = ReturnType<typeof createNewAssign>; // now we only have to change the function

const tsAssign: NewAssign = createNewAssign('Utility Types', 100);

console.log(tsAssign);

// Parameters
type AssignParams = Parameters<typeof createNewAssign>;
const assignArgs: AssignParams = ['Generics', 100];

const tsAssign2: NewAssign = createNewAssign(...assignArgs);

console.log(tsAssign2);

// Awaited (helps with ReturnType of promises)
interface User {
    id: number;
    name: string;
    username: string;
    email: string;
}

const fetchUsers = async (): Promise<User[]> => {
    const data = await fetch('https://jsonplaceholder.typicode.com/users')
        .then((res) => res.json())
        .catch((err) => {
            if (err instanceof Error) console.log(err.message);
        });

    return data;
};

type UserList = Awaited<ReturnType<typeof fetchUsers>>;

fetchUsers().then((users) => {
    console.log(users);
})
