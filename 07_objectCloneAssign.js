console.log(`           ==========Assignment No. 1==========`);
let arrayNums = [ 20, 3, 4, 56, 90, 400, 49 ];
let array = arrayNums;
console.log(`1) Original array is : [${arrayNums}]`)
console.log(`   Shallow clone on arrayNums is : [${array}]`);
array.push(55,66);
console.log(`   Update array by using push () method : [${array}]`);
console.log(`------------------------------------------------------------------------------------------------------`);
let arrayCloneDeep = [...arrayNums];
console.log(`2) Deep clone using Spread operator : [${arrayCloneDeep}]`);
arrayNums.push(10,25);
console.log(`   Updated Reference Array After Deep Spread Operator : [${arrayNums}]`);
console.log(`------------------------------------------------------------------------------------------------------`);
let arrayEven = [2,30,14,8];
//console.log(arrayEven);
let mergeArray = [...arrayNums,...arrayEven];
console.log(`3) After merging arrayEven with arrayNums : [${mergeArray}]`);
console.log(`------------------------------------------------------------------------------------------------------`);
const employee_info = {
    emp_name:"John Doe",
    emp_id:24,
    salary:{
        july_month:"40,000 INR",
        aug_month: "50,000 INR",
        jun_month: "65,000 INR"
    },
    address:{
        locality:{
            colony:"Om Vrindavan Society",
            street:"Kanch Pokali, 431202"
        },
        city:"Mumbai",
        state: "Maharastra",
        country: "India"
    },
    Mobile: ["+91 860 034 5688","1800-4567-32","+91-9096 5678 77"],
}
console.log(`4)`);
console.log(employee_info);
console.log(`------------------------------------------------------------------------------------------------------`);
console.log(`5)`);
console.log("John Doe - Address Details are :",employee_info.address.locality,employee_info.address.city,employee_info.address.state,employee_info.address.country);
console.log(`${employee_info.emp_name} Mobile Numbers are: ${employee_info.Mobile[0]}, ${employee_info.Mobile[1]}, ${employee_info.Mobile[2]}`);
console.log(`--------------------------------------------------------------------------------------------------------------------------------`);
console.log(`6) Perform deep cloning using JSON.stringfy( )\n`); 
console.log(`6a) Update property july month salary to 80K in cloned object.`);
employee_info.salary;
console.log(employee_info.salary);
let emp_Details = JSON.parse(JSON.stringify(employee_info));
emp_Details.salary.july_month = "80,0000 INR";
console.log(emp_Details.salary);
console.log(`\n`);
console.log(`6b) Update property country to United Kingdom in original object.`);
employee_info.address;
console.log(employee_info.address);
employee_info.address.country = "United Kingdom";
console.log(employee_info.address);
console.log(`--------------------------------------------------------------------------------------------------------------------------------`);
console.log(`           ==========Assignment No. 2==========`);
const car = {
    carName : "Creta SX",
    company : "Hundai",
    launchYear:2017,
}

const carEngine = {
    enginePower: "1499CC",
    maxPower:"113 BHP",
}
let merge = Object.assign(car,carEngine);
console.log(`1) Merging car and carEngine objects using Object.assign :`);
console.log(merge);
console.log(`--------------------------------------------------------------------------------------------------------------------------------`);
console.log(`2) Merging car and carEngine objects using Spread Operator : `);
let mergeObject = {...car,...carEngine};
console.log(mergeObject);
console.log(`--------------------------------------------------------------------------------------------------------------------------------`);