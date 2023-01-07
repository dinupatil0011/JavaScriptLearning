// function Expression

var stringHandsOn = function () {
  var string = "    Hey you are doing good, keep it up    ";
  console.log(`The given string is: ${string}`);
  console.log(`Length of the string is : ${string.length}`);
  var stringtrim = string.trim();
  console.log(`Leading and Trailling Spaces remove : ${stringtrim}`);
  console.log(
    `The No of spaces remove from string is : ${(string.length - stringtrim.length)}`
  );
  console.log(`Length of string after trim : ${stringtrim.length}`);
  console.log(
    `First and character is : ${stringtrim.charAt(0)} and ${stringtrim.charAt(33)}`
  );
  var stringword = stringtrim.split(" ");
  console.log(`Total word available in string is : ${stringword.length}`);
  console.log(`Index of word "good" is : ${stringtrim.indexOf("good")}`);
  console.log(
    `Substring and slice with start index "22" is : ${string.slice(22)}`
  );
  console.log(
    `String start with word "Hey" is : ${stringtrim.startsWith("Hey")}`
  );
  console.log(`String end with word "up" is : ${stringtrim.endsWith("up")}`);
};
stringHandsOn();
