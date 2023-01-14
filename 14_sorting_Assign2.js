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

const array_employees = [empAnil,empRadha,empRishi,empSonali,empMonika,empViny,empMahi];

console.log(`1) Sort in ascending order of the employee ID.\n`);

array_employees.sort((emp1,emp2)=>{
    return emp1.empId > emp2.empId ? 1 : -1;
});
array_employees.forEach((currentValue)=>{
    console.log(currentValue.empId, currentValue.empName, currentValue.empDept);
 });
 console.log(`------------------------------------------------------------------------------------------------------`);

 console.log(`2) sort in ascending order of the employee department.\n`);

 array_employees.sort((emp1,emp2)=>{
    return emp1.empDept > emp2.empDept ? 1 : -1;
 });
array_employees.forEach((currentValue)=>{
    console.log(currentValue.empId,currentValue.empDept,currentValue.empCompany);
});
console.log(`------------------------------------------------------------------------------------------------------`);

console.log(`3) Sort in descending order of the employee salary.\n`);

array_employees.sort((emp1,emp2)=>{
    return emp1.empSalary < emp2.empSalary ? 1 : -1;
 });
array_employees.forEach((currentValue)=>{
    console.log(currentValue.empName,currentValue.empSalary,currentValue.empCompany);
});
console.log(`------------------------------------------------------------------------------------------------------`);
