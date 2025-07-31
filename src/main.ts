
// TypeScript Grundlagen
let age1: number = 25;
let score1: number = 0;
const username1: string = '';
const isAdmin1: boolean = false;

console.log("age: " + age1);
console.log("score: " + score1);
console.log("username: " + username1 + "");
console.log("isAdmin: " + isAdmin1);

console.log("age > 18: " + (age1 > 18));
console.log("score === 100: " + (score1 === 100));
console.log("username === 'John': " + (username1 === 'John'));
/*
console.log("isAdmin === true: " + (isAdmin1 === true));
*/

// Objekt und Array
const student = {
    name: "Kai",
    age: 33,
    isStudent: false,
    grades: [1.8, 2.0, 1.3]
};
console.log("Student-Objekt:", student);
console.log("Name des Studenten:", student.name);
console.log("Noten des Studenten:", student.grades);

const students = [
    {
        name: "Dennis",
        age: 22,
        isStudent: false,
        grades: [1.7, 2.3, 1.3]
    },
    {
        name: "Uwe",
        age: 24,
        isStudent: true,
        grades: [2.0, 2.7, 3.0]
    }
];

console.log("Array von Studenten:", students);

// TypeScript Grundlagen | For-Schleife & If-Else
const age: number = 20;
const score: number = 5;
const username: string = "Kai Eschelbach";
const isAdmin: boolean = false;

for (let i = 1; i <= age; i++) {
    console.log(i);
}

if (age > 18) {
    console.log("Age is greater than 18.");
} else {
    console.log("Age is 18 or less.");
}

if (score !== 0) {
    {
        console.log("Score is available.");
    }

    if (score) {
        console.log("Score is evaluated as truthy.");
    } else {
        console.log("Score is evaluated as falsy.");
    }

    if (username) {
        console.log("Username is available.");

        /*
        if (username !== undefined && username !== null && username !== "") {
            console.log("Username is available.");
        }
        */

        if (!username) {
            console.log("Username is evaluated as falsy.");
        } else {
            console.log("Username is evaluated as truthy.");
        }


        if (isAdmin) {
            console.log("isAdmin is evaluated as truthy.");
        } else {
            console.log("isAdmin is evaluated as falsy.");
        }

        if (!isAdmin) {
            console.log("isAdmin is false.");
        }
    }

    // Aufgabe 1: Boolesche Werte
    const boolTrue = true;
    console.log('boolTrue ist', boolTrue ? 'wahrhaftig' : 'falsch');

    const boolFalse = false;
    console.log('boolFalse ist', boolFalse ? 'wahrhaftig' : 'falsch');

// Aufgabe 2: Ganzzahlwerte
    const numOne = 1;
    console.log('numOne ist', numOne ? 'wahrhaftig' : 'falsch');

    const numZero = 0;
    console.log('numZero ist', numZero ? 'wahrhaftig' : 'falsch');

    const numMinusOne = -1;
    console.log('numMinusOne ist', numMinusOne ? 'wahrhaftig' : 'falsch');

// Aufgabe 3: Zeichenkettenwerte
    const strHi = "hi";
    console.log('strHi ist', strHi ? 'wahrhaftig' : 'falsch');

    const strEmpty = "";
    console.log('strEmpty ist', strEmpty ? 'wahrhaftig' : 'falsch');

    const strSpace = " ";
    console.log('strSpace ist', strSpace ? 'wahrhaftig' : 'falsch');

    const strZero = "0";
    console.log('strZero ist', strZero ? 'wahrhaftig' : 'falsch');

    const strFalse = "false";
    console.log('strFalse ist', strFalse ? 'wahrhaftig' : 'falsch');

// Aufgabe 4: Array-Werte
    const arrEmpty: any[] = [];
    console.log('arrEmpty ist', arrEmpty ? 'wahrhaftig' : 'falsch');

    const arrOne = [1];
    console.log('arrOne ist', arrOne ? 'wahrhaftig' : 'falsch');

    const arrZero = [0];
    console.log('arrZero ist', arrZero ? 'wahrhaftig' : 'falsch');

    const arrFalse = [false];
    console.log('arrFalse ist', arrFalse ? 'wahrhaftig' : 'falsch');

// Aufgabe 5: Objektwerte
    const objEmpty = {};
    console.log('objEmpty ist', objEmpty ? 'wahrhaftig' : 'falsch');

    const objPerson = { name: "John" };
    console.log('objPerson ist', objPerson ? 'wahrhaftig' : 'falsch');

// Bonus: Du kannst auch zusätzliche Fälle wie `null`, `undefined` oder `NaN` testen
    const bonusNull = null;
    console.log('bonusNull ist', bonusNull ? 'wahrhaftig' : 'falsch');

    const bonusUndefined = undefined;
    console.log('bonusUndefined ist', bonusUndefined ? 'wahrhaftig' : 'falsch');

    const bonusNaN = NaN;
    console.log('bonusNaN ist', bonusNaN ? 'wahrhaftig' : 'falsch');

}