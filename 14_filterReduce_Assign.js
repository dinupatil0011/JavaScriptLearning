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

const arrayOfEmployee = [empAnil,empRadha,empRishi,empSonali,empMonika,empViny,empMahi];

console.log(`1) Find all the employees from Wipro Company.`);

const empWipro = arrayOfEmployee.filter((employee)=>{
 return employee.empCompany=="Wipro";
});
empWipro.forEach((emp)=>{
    console.log(emp);
});
console.log(`------------------------------------------------------------------------------------------------------`);
console.log(`2) Find all the employees from IT or HR department.`);

const empDeprt = arrayOfEmployee.filter((employee)=>{
    return employee.empDept=="IT" || employee.empDept=="HR";
});
empDeprt.forEach((dept)=>{
    console.log(dept);
});
console.log(`------------------------------------------------------------------------------------------------------`);
console.log(`3) Find all the employees whose empID is greater than 50.`);

const empid = arrayOfEmployee.filter((employee)=>{
    return employee.empId>50;
});
empid.forEach((id)=>{
    console.log(id);
});
console.log(`------------------------------------------------------------------------------------------------------`);
console.log(`4) All employees whose name starts with A,V and M.`);

arrayOfEmployee.filter((employee)=>{
    if(employee.empName.startsWith("A") || employee.empName.startsWith("V") || employee.empName.startsWith("M")){
        console.log(employee);
    }
});
console.log(`------------------------------------------------------------------------------------------------------`);
console.log(`5) Find average salary for all the department.`);

sum = 0;
const avgSalary = arrayOfEmployee.filter(employee => sum = sum + employee.empSalary)
const finalAvgSalary = avgSalary.reduce( (runningTotal, employee)=> {
    return sum / arrayOfEmployee.length;
},0 );
console.log(`   Average salary of all the employees is - `,finalAvgSalary);
console.log(`------------------------------------------------------------------------------------------------------`);
console.log(`6) Find the average salary of IT department.`);

const avgSal = arrayOfEmployee.filter(employee =>{
    return employee.empDept == "IT";
});
 const avgSalIT = avgSal.reduce((runningTotal, empSal)=>{
    return runningTotal + empSal.empSalary;
},0 );
console.log(`   Average salary of IT department is -  ${avgSalIT/avgSal.length}`);
console.log(`------------------------------------------------------------------------------------------------------`);