console.log("1)");
var square = function (num, num1, num2, num3) {
  console.log("The square of", num, "=", num * num);
  console.log("The square of", num1, "=", num1 * num1);
  console.log("The square of", num2, "=", num2 * num2);
  console.log("The square of", num3, "=", num3 * num3);
};
square(5, 6, 25, 100);
console.log("--------------------********--------------------");
console.log("2)");
console.log("The type of square is:", typeof square);
console.log("--------------------********--------------------");
console.log("3)");
var areaOfRectangle = function (length, width) {
  console.log("The Area of Rectangle is:", length * width);
};
areaOfRectangle(499, 917);
console.log("--------------------********--------------------");
console.log("4)");
var swapValues = function (value1, value2) {
  console.log("Before Swapping:", value1, value2);
  var temp = value1;
  value1 = value2;
  value2 = temp;
  console.log("After Swapping:", value1, value2);
};
swapValues("Virat", "Anushka");
swapValues(1000, 2000);
console.log("--------------------********--------------------");
console.log("5)");
var character = "JS the most popular language";
console.log("Given string is:", character);
console.log("Total number of character in the string is: ", character.length);
console.log("Character at index 6 is: ", character.charAt(6));
console.log("Character at index 11 is: ", character.charAt(11));
var lengthTotal = character.length;
console.log(
  "The last Character in the string is: ",
  character.charAt(lengthTotal - 1)
);
var lengthTotal = character.length;
console.log("The first character in the string is: ", character.charAt(0));
var square = character.length * character.length;
console.log("Square of length is:", square);
console.log("--------------------********--------------------");
