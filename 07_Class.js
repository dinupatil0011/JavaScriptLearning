class Employee{
    constructor(name, id, age, city){
        this.name = name;
        this.id = id;
        this.age = age;
        this.city = city;
    } 
    details(){
        console.log(this.name, this.id, this.age, this.city);
    }
}
let empSmith = new Employee("Smith", 33, 26, "Delhi");
let empJay = new Employee("Jay", 3000, 21, "Pune");
let empBill = new Employee("Billgates", 5000, 58, "USA");
empSmith.details();
empJay.details();
empBill.details();



class student{
    name
    rollNo
    age
    graduation
    constructor(name, rollNo, age, graduation){
        this.name = name;
        this.rollNo = rollNo;
        this.age = age;
        this.graduation = graduation;
       }
}
let studChetan = new student("Chetan", 121, 25, "BE Computer");
let studReshma = new student("Reshama", 312, 20, "MCA");
console.log(studChetan);
console.log(studReshma);


let isInstance = studChetan instanceof student;
console.log(isInstance);
// Object is an instance of class