const fruits_seasonal = ["Banana", "Orange", "Apple", "Mango", "Water Melon"];
console.log(`Given array is : ${fruits_seasonal}`);
console.log( `1)  Log First and last element on the console.`);
let totalLength = fruits_seasonal.length;
let firstElement = fruits_seasonal[0];
let lastElement = fruits_seasonal[totalLength-1]
console.log(` First element in given array is : ${firstElement} \n Last element in given array is : ${lastElement} `);
console.log(`--------------------------------------------------------------------------------`);

console.log( `2) Add Papaya before Banana.`);
console.log(`Before adding Papaya : ${fruits_seasonal}` );
fruits_seasonal.unshift(`Papaya`);
console.log(`After adding Papaya : ${fruits_seasonal}`);
console.log(`--------------------------------------------------------------------------------`);

console.log( `3)  Remove Mango form array.`);
console.log(`Before removing Mango : ${fruits_seasonal}` );
let index = fruits_seasonal.indexOf("Mango");
fruits_seasonal.splice(index,1)
console.log(`After removing Mango : ${fruits_seasonal}`);
console.log(`--------------------------------------------------------------------------------`);

console.log( `4) Add Pineapple at the last index.`);
console.log(`Before adding Pineapple : ${fruits_seasonal}`);
fruits_seasonal.push("Pineapple");
console.log(`After adding Pineapple : ${fruits_seasonal}`);
console.log(`--------------------------------------------------------------------------------`);

console.log( `5) Insert "Dragon Fruit" before Pineapple.`);
console.log(`Before adding Dragon Fruit : ${fruits_seasonal}`);
fruits_seasonal.splice(5,0,"Dragon Fruit");
console.log(`After adding Dragon Fruit : ${fruits_seasonal}`);
console.log(`--------------------------------------------------------------------------------`);

console.log( `6) Replace "Orange" with "Kiwi".`);
console.log(`Before replacing Orange with Kiwi : ${fruits_seasonal}`);
let indexOrange = fruits_seasonal.indexOf("Orange");
fruits_seasonal.splice(indexOrange,1,"Kiwi");
console.log(`After replacing Orange with kiwi : ${fruits_seasonal}`);
console.log(`--------------------------------------------------------------------------------`);

console.log( `7) Log the elements starting from index 1 to 4.`);
console.log(`Given array : ${fruits_seasonal}`);
console.log(`Elements from index 1 to 4 are : ${fruits_seasonal.slice(1,5)}`);
console.log(`--------------------------------------------------------------------------------`);

console.log( `8) Only select last three elements using length property.`);
console.log(`Given array : ${fruits_seasonal}`);
let res = fruits_seasonal.slice(-3);
console.log(`Last three elements in the array is : ${res}`);
console.log(`--------------------------------------------------------------------------------`);
