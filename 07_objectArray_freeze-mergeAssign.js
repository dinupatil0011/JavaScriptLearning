console.log(`--------------------------------------------------------------------------------------------------------------------------------`);
console.log(`1) Create object personal details.`);
const personalDetails = {
    name : "Dinesh",
    age: 24,
    gender: "Male",
    address: "Jalgaon"
}
console.log(personalDetails);
console.log(`---------------------------------------------------------------------------------------------`);
console.log(`2) Create object college details.`);
const collegeDetails = {
    clgName : "Nutan Maratha College",
    venue : "Jalgaon",
    university : "Jalgaon",
}
console.log(collegeDetails);
console.log(`---------------------------------------------------------------------------------------------`);
console.log(`3) Merging both the objects.`);
Object.assign(personalDetails, collegeDetails);
console.log(personalDetails);
console.log(`-----------------------------------------------------------------------------------------------------`);
console.log(`4) Create a array of friends name and freeze it.`);
const friendNames = ["TEJAS", "PRATHMESH", "BHUSHAN","AKSHAY"]
Object.freeze(friendNames);
console.log(friendNames);
console.log(`---------------------------------------------------------------------------------------------`);
console.log(`5) Iterate the array using for loop.`);
function traversObject(friendNames) {
    for (const key in friendNames) {
      if (Object.hasOwnProperty.call(friendNames, key)) {
          const element = friendNames[key];
          console.log(element);
          
      }
    }
}
traversObject(friendNames);
console.log(`---------------------------------------------------------------------------------------------`);


