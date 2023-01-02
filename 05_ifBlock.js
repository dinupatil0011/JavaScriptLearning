console.log(` ====== if block ======= `);
console.log(`Check whether number is positive or negative...`);
var myNumber = -10;
if (myNumber > 0) {
  console.log(`Given number ${myNumber} is positive`);
}
var num = -4;
if (num <= 0) {
  console.log(`Given number ${num} is Negative`);
}
var num1 = 100;
var num2 = 200;
var num3 = 99;
if (num1 > num2 && num1 > num3) {
  console.log(`You are greater man ${num1}`);
}
if (num2 > num1 && num2 > num3) {
  console.log(`You are greater man ${num2}`);
}
if (num3 > num1 && num3 > num2) {
  console.log(`You are greater man ${num3}`);
}

function evenOrOdd(value) {
  if (value % 2 == 0) {
    return "EVEN";
  }
  if (value % 2 != 0) {
    return "ODD";
  }
}
evenOrOdd(45);
