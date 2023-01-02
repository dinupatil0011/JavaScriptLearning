console.log(`1) Defining class "Vehicle" with data members and constructor.`);
class Vehicle {
    name
    type
    model
    price
    color
    constructor(name, type, model, price, color){
       this.name = name;
       this.type = type;
       this.model = model;
       this.price = price;
       this.color = color;
    }
}
let vehicleNo1 = new Vehicle("Suzuki Dezire", "4 wheeler", "ZXI Plus AMT","12.75Lakh", "Silver");
let vehicleNo2 = new Vehicle("Pulsar", "2 wheeler", "Pulsar 250", "1.18Lakh","Red");
let vehicleNo3 = new Vehicle("Auto", "3 wheeler", "Bajaj RE Compact CNG","2.17Lakh", "Yellow - Black");
let vehicleNo4 = new Vehicle("Scorpio", "4 wheeler", "6 Series GT 800D 2021","18.96Lakh", "Black");
let vehicleNo5 = new Vehicle("Maruti Suzuki", "4 wheeler", "800CS","8.67Lakh", "White");
console.log(vehicleNo1);
console.log(vehicleNo2);
console.log(vehicleNo3);
console.log(vehicleNo4);
console.log(vehicleNo5);
console.log(`--------------------------------------------------------------------------------------------------------------------------------`);

console.log(`2) Defining class "College" with data members, constructor and member function.`);
class College {
    clgName;
    clgLocation;
    numOfDepartments;
    University;
    constructor(clgName, clgLocation, numOfDepartments, University){
        this.clgName =  clgName;
        this.clgLocation =   clgLocation;
        this.numOfDepartments = numOfDepartments;
        this.University = University;
    }
    collegeDetails() {
        console.log(`Details of College are:`,this. clgName,this.clgLocation,this.numOfDepartments,this.University);
    }
}
let collegeNo1 = new College("Nutan Maratha College", "Jalgaon", "7", "K.B.C.N.M.U. University");
let collegeNo2 = new College("MJ College", "Jalgaon", "11", "K.B.C.N.M.U. University");
let collegeNo3 = new College("Indira Gandhi College", "Daund", "4", "Pune University");
let collegeNo4 = new College("IMR College", "Malegaon", "10", "Nashik University");
collegeNo1.collegeDetails();
collegeNo2.collegeDetails();
collegeNo3.collegeDetails();
collegeNo4.collegeDetails();
console.log(`--------------------------------------------------------------------------------------------------------------------------------`);

console.log(`3) Traversing object using for in loop.`);
function traverseObject(collegeNo1){
    for (const key in collegeNo1) {
        if (Object.hasOwnProperty.call(collegeNo1, key)) {
            const element = collegeNo1[key];
            console.log(`${key}: ${element}`);
        }
    }
}
traverseObject(collegeNo1);console.log(` \n `);
traverseObject(collegeNo2);console.log(` \n `);
traverseObject(collegeNo3);console.log(` \n `);
traverseObject(collegeNo4);