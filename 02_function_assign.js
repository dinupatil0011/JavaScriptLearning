console.log("1) Function with no arguments and no return type");
function display() {
  console.log("I will try my best");
  console.log("I will give my 100%");
}
display();
console.log("--------------------********--------------------");
console.log("2) Function with arguments and no return value");
function personalDetails(firstName, lastName, collegeName) {
  console.log("Dinesh Patil Nutan maratha college");
}
personalDetails("firstName, lastName, collegeName");
console.log("--------------------********--------------------");
console.log("3) Function of Swaping given values");
function swapValuesDude(value1, value2) {
  console.log("Before Swapping:", value1, value2);
  var temp = value1;
  value1 = value2;
  value2 = temp;
  console.log("After Swapping:", value1, value2);
}
swapValuesDude("Virat", "Anushka");
swapValuesDude(1000, 2000);
console.log("--------------------********--------------------");
console.log("4) Addition the values");
function addThreeValues(val1, val2, val3) {
  console.log(val1 + val2 + val3);
}
addThreeValues(10.23, 600, 40);
addThreeValues("Hello", "Good", "Morning");
console.log("--------------------********--------------------");
console.log("5) Sunday Assignment: Normal Function");
function bankDetails(bankName, accountNumber, location, pinCode) {
  console.log(bankName, accountNumber, location, pinCode);
}
bankDetails(
  "Bank Name: CITI Bank,",
  "Account Number: 3456782345,",
  "Branch: Pune,",
  "Pincode: 431202"
);
bankDetails(
  "Bank Name: Axis Bank,",
  "Account Number: 7856782345,",
  "Branch: Mumbai,",
  "Pincode: 441202"
);
bankDetails(
  "Bank Name: HDFC Bank,",
  "Account Number: 8956782345,",
  "Branch: Pune,",
  "Pincode: 631202",
  "Open"
);
console.log("--------------------********--------------------");
