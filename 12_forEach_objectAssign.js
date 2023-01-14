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

console.log(`1) Find out TCS employee and log on name and company.`);
const arrayOfEmployee = [empAnil,empRadha,empRishi,empSonali,empMonika,empViny,empMahi];
arrayOfEmployee.forEach((employee)=>{
    if(employee.empCompany=="TCS"){
        console.log("    Employee name is-",employee.empName,"and", "Company is-", employee.empCompany);
    }
});
console.log(`------------------------------------------------------------------------------------------------------`);
console.log(`2) Find the employees with salary greater than or equal 50000.`);
arrayOfEmployee.forEach((employee)=>{
    if (employee.empSalary >=50000){
        console.log(employee);
         }
    });
console.log(`------------------------------------------------------------------------------------------------------`);
console.log(`3) Find the sum of all employees salary.`);
let sum = 0; 
arrayOfEmployee.forEach((employee)=>{
    sum+=employee.empSalary;
});
console.log("   Sum of all employee salaray is - ",sum);
console.log(`------------------------------------------------------------------------------------------------------`);
console.log(`4) Find the average salary of all employees.`);
arrayOfEmployee.forEach((employee)=>{
    average = sum/arrayOfEmployee.length;
})
console.log("   The average salary of all the employees is :",average);   
console.log(`------------------------------------------------------------------------------------------------------`);
console.log(`5) Find the "IT" OR "HR" department employees whose salary is greater than or equal to 75000.`);
arrayOfEmployee.forEach((employee)=>{
    if((employee.empDept=="IT" || employee.empDept=="HR") && employee.empSalary>=75000){
        console.log(employee);

    }
  });
  console.log(`------------------------------------------------------------------------------------------------------`);