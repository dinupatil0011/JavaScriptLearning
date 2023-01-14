class Employee{
    constructor(empId,empName,empDept,empSalary,empCompany){
        this.empId = empId;
        this.empName = empName;
        this.empDept = empDept;
        this.empSalary = empSalary;
        this.empCompany = empCompany;
    }
};
const empAnil = new Employee(22, "Anil", "IT", 50000, "TCS");
const empRadha = new Employee(33, "Radha","HR", 74000, "Wipro");
const empRishi = new Employee(55, "Rishi", "Finance",47000, "TCS");
const empSonali = new Employee(66, "Sonali", "Finance", 45000, "Infosys");
const empMonika = new Employee(77, "Monika", "IT", 40000, "Wipro");
const empViny = new Employee(88, "Vinayak", "IT", 75000, "TCS");
const empMahi = new Employee(99,"Mahesh", "HR", 85000, "Infosys");

let map_employees = new Map();
map_employees.set(22,empAnil);
map_employees.set(33,empRadha);
map_employees.set(55,empRishi);
map_employees.set(66,empSonali);
map_employees.set(77,empMonika);
map_employees.set(88,empViny);
map_employees.set(99,empMahi);

console.log(`------------------------------------------------------------------------------------------------------`);
console.log(`1) Traverse the map using forEach loop.`);
map_employees.forEach((key,value)=>{
    console.log(value+" ===>" ,key);

})
console.log(`------------------------------------------------------------------------------------------------------`);

