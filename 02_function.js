console.log("Function with no arguments and no return type");
function display() {
  console.log("My name: Dinesh");
  console.log("My surname: Patil");
}
display(); //Function call or Function invocation

function show() {
  console.log("My college name: J.D.M.V.P. Nutan Maratha College");
}
show();

console.log("Function with arguments and  no return value");
function showDetails(myName) {
  console.log(myName);
}
showDetails("Dinesh Patil");

function swapValues(value1, value2) {
  console.log("Before Swap", value1, value2);
  var temp = value1;
  value1 = value2;
  value2 = temp;
  console.log("After Swap", value1, value2);
}
swapValues(100, 200);
swapValues(2, 4);
swapValues("Hitesh", "Kishor");
swapValues("You", "Me");

console.log("Function with arguments and return value");
function rajuBhaiya() {
  console.log("Going in market");
  console.log("Purchased fresh vegetables");
  console.log("Come back");
  return "Bag of vegetables";
}
var bagOfVegetables = rajuBhaiya(100);
console.log(bagOfVegetables);

function add(val1, val2) {
  console.log(val1 + val2);
}
add(10, 20);
add("Chetan", "Vinny");

function multiply(num1, num2) {
  var result = num1 * num2;
  console.log(result);
  // return result;
}
console.log("multiply", multiply(10, 10));

var multiplyResult = multiply(56, 45);
var finalResult = multiplyResult + 100;
console.log(finalResult);
