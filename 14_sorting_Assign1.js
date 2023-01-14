const array_roll_numbers = [113,45,56,11,32,45,109,799,56,45];
console.log(`Given array :`);
console.log(array_roll_numbers);
console.log(`------------------------------------------------------------------------------------------------------`);
console.log(`1) Reverse the array.`);

array_roll_numbers.reverse();
console.log(array_roll_numbers);
console.log(`------------------------------------------------------------------------------------------------------`);
console.log(`2) Use sort() without any custom logic.`);
array_roll_numbers.sort();
console.log(array_roll_numbers);
console.log(`------------------------------------------------------------------------------------------------------`);
console.log(`3) Sort the array in ascending order with custom logic.`);
array_roll_numbers.sort((a,b)=>{
    return a>b ? 1 : -1;
});
console.log(array_roll_numbers);
console.log(`------------------------------------------------------------------------------------------------------`);
console.log(`4) Find the greatest number from the array.`);

console.log(array_roll_numbers);
 greatest = array_roll_numbers.sort((a,b)=>a-b)[array_roll_numbers.length-1];
console.log ("   The greatest number from the array is : ",greatest);
console.log(`------------------------------------------------------------------------------------------------------`);
console.log(`5) Find the smallest number from the array.`);

array_roll_numbers.reverse();
console.log(array_roll_numbers);
smallest = array_roll_numbers.sort()[1];
console.log("   The smallest number from the array is : ",smallest);
console.log(`------------------------------------------------------------------------------------------------------`);
console.log(`6) Remove duplicate number form the array.`);

const arrayDup = array_roll_numbers.filter((item, index) =>array_roll_numbers.indexOf(item)=== index);
console.log(arrayDup);
console.log(`------------------------------------------------------------------------------------------------------`);