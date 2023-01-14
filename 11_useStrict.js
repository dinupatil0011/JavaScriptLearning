'use strict'
let city = "Pune"; // Undeclared variable is not allowed.
console.log(city);

const person = { // Undeclared objects are not allowed.
    name: "Mohit",
    age: 23
}
console.log(person);

// delete person;

function show(name, name){  // Duplicating a parameter or arguments name is not allowed.
    console.log(name, name);
}
show("Dhoni", 42);
