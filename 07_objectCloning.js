let myName = "Anil";
let yourName = "Sunil";

myName = yourName; // Deep Clone always performed on primitive data type

console.log(myName);
console.log(yourName);

yourName = "Jenifer";
console.log(myName);
console.log(yourName);

let anil = {
    age: 23,
    name: "Anil",
    company: "Microsoft"
}
let sunil = {
    age: 26,
    name: "Sunil",
    company: "Google"
}
anil = sunil; // Shallow cloning
sunil.country = "India";
console.log("Sunil: ", sunil); 
console.log("Anil: ", anil); 

let car = {
    brand: "Tata",
    color: "Black", 
}
let vehicle = car;

console.log(car, vehicle);

vehicle.color = "Red"
console.log(car,vehicle);

car.color = "Blue"
console.log(car,vehicle);


// 1) Deep clone using Spread Operator (...)
let empSumit = {
    empName : "Sumit",
    empSalary : "70K"
}
// ... Spread Operator
// console.log(empSumit);
// console.log({... empSumit});
let empMohit = {...empSumit}; // Deep Cloning using spread operator (... ) 
empMohit.empName = "Mohit";
console.log(empMohit);
console.log(empSumit);

// 1) Deep clone using JSON.stringify
console.log("===== Deep clone using JSON.stringify ======");
const empStew = {
    name: "Stew Jobs",
    age: 50,
    marks: {
        science: 70, 
        math: 90,
        english: 87
    }
}
let empBill = JSON.parse(JSON.stringify(empStew));
empBill.marks.science = 90;
empBill.name = "Bill Gates";
console.log(empStew);
console.log(empBill);
console.log(empStew.marks.science);
console.log(empBill.marks.science);

