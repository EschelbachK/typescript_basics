
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

// if (!username) prüft, ob username falsy ist – also "" (leer), null, undefined, 0, false oder NaN.
        if (!username) {
            console.log("Username is evaluated as falsy.");
        } else {
            console.log("Username is evaluated as truthy.");
        }

// Schritt 7: Prüfen, ob isAdmin als truthy bewertet wird
        if (isAdmin) {
            console.log("isAdmin is evaluated as truthy.");
        } else {
            console.log("isAdmin is evaluated as falsy.");
        }

// Schritt 8: Prüfen, ob isAdmin genau false ist
        if (!isAdmin) {
            console.log("isAdmin is false.");
        }
    }
}