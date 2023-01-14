console.log(`1) Log the array element with it’s index using forEach loop() with arrow function.`);
const array_numbers = [ 1, -7, 40, 502, -77, 91, 0, 108, 89, -601 ];
array_numbers.forEach((currentValue,index)=>{
    console.log("Value is",currentValue, "and","index is",index);

});
console.log(`------------------------------------------------------------------------------------------------------`);
console.log(`2) Find the positive values in the array.`);
const positiveValue = [];
array_numbers.forEach((currentValue)=>{
    if(currentValue>0){
        positiveValue.push(currentValue);
        }
});
console.log(positiveValue);
console.log(`------------------------------------------------------------------------------------------------------`);
console.log(`3) Find the negative values in the array.`);
const negativeValue = [];
array_numbers.forEach((currentValue)=>{
    if(currentValue<0){
        negativeValue.push(currentValue);
        }
});
console.log(negativeValue);
console.log(`------------------------------------------------------------------------------------------------------`);
console.log(`4) Find the even values in the array.`);
const arrayOfEven = [];
array_numbers.forEach( (currentValue) => {
    if(currentValue%2==0) {
        arrayOfEven.push(currentValue);
      }
});
console.log(arrayOfEven);
console.log(`------------------------------------------------------------------------------------------------------`);
console.log(`5) Find the sum of all elements in the array.`);
let sum = 0; 
array_numbers.forEach((currentValue)=>{
    sum +=currentValue;
  });
console.log("   Sum of all Values is :",sum);
console.log(`------------------------------------------------------------------------------------------------------`);
console.log(`6) Find the even positioned values.`);
const arrayOfEVe = [];
array_numbers.forEach((currentValue, index) => {
    if (index % 2 == 0) {
        arrayOfEVe.push(currentValue)
        
    }
});
console.log(arrayOfEVe);
console.log(`------------------------------------------------------------------------------------------------------`);
