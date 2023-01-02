//function with no arguments and no returns type
console.log("---------------Assignment 1 : String Templete");
function StringTemplete() {
  console.log('My dream company is "Infosys');
  var myHobbies1 = "Playing Kho-Kho";
  var myHobbies2 = "Reading Motivational Books";
  var myHobbies3 = "Learning New Things";
  console.log(
    `My Hobbies are: myhobbies1: ${myHobbies1}, myhobbies2: ${myHobbies2}, myhobbies3: ${myHobbies3}`
  );
  console.log(
    `Hobbies are concatinating: ${myHobbies1}${myHobbies2}${myHobbies3}`
  );
}
StringTemplete();

console.log("---------------Assignment 2 : String Templete");
// Normal function with arguments and return
function wordLengthSquare(string) {
  console.log(`Given value are : ${string}`);
  var strLength = string.length;
  console.log(`Length of string is : ${strLength}`);
  var square = strLength * strLength;
  return square;
}
var resultSquare = wordLengthSquare("JavaScript");
console.log(`Square of the string is : ${resultSquare}`);
var resultSquare = wordLengthSquare("Google");
console.log(`Square of the string is : ${resultSquare}`);
var resultSquare = wordLengthSquare("Developer");
console.log(`Square of the string is : ${resultSquare}`);

// Function Expression with no argument and no return

var wordLengthSquare = function () {
  var string = "I am Angular Developer";
  console.log(`Given string is : ${string}`);
  var stringLength = string.length;
  console.log(`The string length is : ${stringLength}`);
  var stringslice = string.split(" ");
  var totalWord = stringslice.length;
  console.log(`Total words in given string is : ${totalWord}`);
  var stringDiv = stringLength / stringslice.length;
  console.log(`Division of string length to the No of word = ${stringDiv}`);
  var stringMul = stringLength * stringslice.length;
  console.log(`Multiplication of string length and No of word = ${stringMul}`);
};
wordLengthSquare();
