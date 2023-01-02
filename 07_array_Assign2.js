const arrayNumbers = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];
let totalLength = arrayNumbers.length;
console.log(`1) Total length of the given array is : ${totalLength}`);
console.log(`--------------------------------------------------------------------------------`);
let firstElement = arrayNumbers[0];
let lastElement = arrayNumbers[totalLength-1]
console.log(`2)  First element in given array is : ${firstElement} \n    Last element in given array is : ${lastElement} `);
console.log(`--------------------------------------------------------------------------------`);
console.log(`3) The third last number in the array is : ${arrayNumbers[8]}`);
console.log(`--------------------------------------------------------------------------------`);
let evenNumArray = [];
for (let index = 0; index < arrayNumbers.length; index++) {
    const element = arrayNumbers[index];
    if (element % 2 == 0) {
      evenNumArray = evenNumArray.concat(element);
    }
  }
console.log(`4) The even numbers in the given array is : ${evenNumArray}`);
console.log(`--------------------------------------------------------------------------------`);
let oddNumArray = [];
for (let index = 0; index < arrayNumbers.length; index++) {
  const element = arrayNumbers[index];
  if (element % 2 != 0) {
    oddNumArray = oddNumArray.concat(element);
  }
}
console.log(`5) The odd numbers in the given array is : ${oddNumArray}`);
console.log(`--------------------------------------------------------------------------------`);
var pos = [];
for (let index = 0; index < arrayNumbers.length; index++) {
  if (index % 2 == 0) {
    pos = pos.concat(arrayNumbers[index]);
  }
}
console.log(`6) All even index positioned numbers are : ${pos}`);
console.log(`--------------------------------------------------------------------------------`);
var pos = [];
for (let index = 0; index < arrayNumbers.length; index++) {
  if (index % 2 != 0) {
    pos = pos.concat(arrayNumbers[index]);
  }
}
console.log(`7) All odd index positioned numbers are : ${pos}`);
console.log(`--------------------------------------------------------------------------------`);
let sumOfElements = 0;
for (let index = 0; index < arrayNumbers.length; index++) {
  const element = arrayNumbers[index];
  sumOfElements = sumOfElements + element;
}
console.log(`8) Sum of all the elements in the array is : ${sumOfElements}`)
console.log(`--------------------------------------------------------------------------------`);
let multiple = [];
for (let index = 0; index < arrayNumbers.length; index++) {
  const element = arrayNumbers[index];
  if (element % 5 == 0) {
    multiple = multiple.concat(element);
  }
}
console.log(`9) Numbers which is multiple of 5 are : ${multiple}`);
console.log(`--------------------------------------------------------------------------------`);
let numAvailable = arrayNumbers.includes(115);
console.log(`10) Is 115 is available in the arrayNumbers : ${numAvailable}`);
console.log(`--------------------------------------------------------------------------------`);
let isAvailable = arrayNumbers.includes(23);
console.log(`11) Is 23 is available in the arrayNumbers : ${isAvailable}`);
console.log(`--------------------------------------------------------------------------------`);
console.log(`12) Before inserting 55,66 before index 3 is : ${arrayNumbers}`);
arrayNumbers.splice(3,0,55,66);
console.log(`After inserting 55,66 before index 3 is : ${arrayNumbers}`);
console.log(`--------------------------------------------------------------------------------`);
console.log(`13) Before deleting 3 numbers from index 4 is : ${arrayNumbers}`);
arrayNumbers.splice(4,3);
console.log(`After deleting 3 numbers from index 4 is : ${arrayNumbers}`);
console.log(`--------------------------------------------------------------------------------`);
