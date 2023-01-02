console.log(`1) SBI Bank details by invoking the function`);
const sbiBank ={
    bankName : "State Bank Of India",
    location : "Jalgaon",
    accountNo : "09311011424",
    IFSC : "SBI00000514",
    interestRate : "8%",

    showDetails : function (){
        console.log(sbiBank);
    }
}
sbiBank.showDetails();
console.log(`--------------------------------------------------------------------------------------------------------------------------------`);

console.log(`2) AXIS Bank details by invoking the function`);
const axisBank ={
    bankName : "Axis Bank",
    location : "Dhule",
    accountNo : 093320220001855,
    IFSC : "AXB0000614",
    interestRate : "10%",

    showDetails : function (){
        console.log(axisBank);
    }
}
axisBank.showDetails();
console.log(`--------------------------------------------------------------------------------------------------------------------------------`);

console.log(`3) HDFC Bank details by invoking the function`);
const hdfcBank ={
    BankName : "HDFC Bank",
    location : "Nandurbar",
    accountNo : 093420330002265,
    IFSC: "HDFC0000445",
    interestRate : "8%",

    showDetails : function (){
        console.log(hdfcBank);
    }
}
hdfcBank.showDetails();
console.log(`--------------------------------------------------------------------------------------------------------------------------------`);

console.log(`4) YES Bank details by invoking the function`);
const yesBank ={
    bankName : "Yes Bank",
    location : "Dharangaon",
    accountNo : 09372044000825,
    IFSC : "YB0000995",
    interestRate : "12%",

    showDetails : function (){
        console.log(yesBank);
    }
}
yesBank.showDetails();
console.log(`--------------------------------------------------------------------------------------------------------------------------------`);