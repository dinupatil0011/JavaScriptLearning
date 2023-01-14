console.log(`1) Arrow function with no arguments and no return value.`);
let show = ()=> {
console.log("   Good Morning, Today is Monday");
}
show();
console.log(`------------------------------------------------------------------------------------------------------`);
console.log(`2) Multiplication of the values and multiplication of three numbers with one default value.`);
let multiply = (n1,n2,n3=1)=>{
console.log(`   Multiplication of 5,5,2 is =`, n1*n2*n3);
console.log(`   Multiplication of 10,4,1 is =`, 10*4*1);
}
multiply(5,5,2,10,4);
console.log(`------------------------------------------------------------------------------------------------------`);
console.log(`3) Addition by passing 5 arguments with return value.`);
let addition = (n1,n2,n3,n4,n5=0)=>{
    let add = n1+n2+n3+n4+n5;
    return add;
}
let addresult = addition(100,100,200,349,756);
let addres = addition("I am","learning","ES6","features","in depth");
console.log(`   The addition is `,addresult);
console.log(`   The addition is `, addres);
console.log(`------------------------------------------------------------------------------------------------------`);