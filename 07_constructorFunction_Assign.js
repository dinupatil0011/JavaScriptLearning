console.log(`2) ======Constructor Function======`);
function Bank(bankName, location, ifscCode, branchCode){
    this.bankName = bankName;
    this.location = location;
    this.ifscCode = ifscCode;
    this.branchCode = branchCode;
 };
 Bank.prototype.OpenTime = `5)\n The open of the SBI Bank is "9 AM IST" and close time is "6 PM IST"`; 
 
 Bank.prototype.CloseTime = `6)\n The open of the AXIS Bank is "9 AM IST" abd close time is ""6 PM IST"`;
 
 Bank.prototype.Time = `7)\n The Bank name is "YES Bank is Branch code is "2211" open Time is" Open Time is "9 AM IST"`;
 

 let yesBank = new Bank("YES Bank", "Dharangaon", "YES000022", 2211);
 let sbiBank = new Bank("SBI Bank", "Bambhori", "SBI000011", 1413);
 let axisBank = new Bank("AXIS Bank", "Ajintha", "AXS000033", 8964);
 let mahaBank = new Bank("Maharashtra Bank", "Paladhi", "MHB002244", 3652);
 console.log(yesBank);
 console.log(sbiBank);
 console.log(axisBank);
 console.log(mahaBank);
 console.log(`---------------------------------------------------------------------------------------------------`);
 console.log(sbiBank.OpenTime);
 console.log(`---------------------------------------------------------------------------------------------`);
 console.log(axisBank.CloseTime);
 console.log(`---------------------------------------------------------------------------------------------`);
 console.log(yesBank.Time);
 console.log(`---------------------------------------------------------------------------------------------`);