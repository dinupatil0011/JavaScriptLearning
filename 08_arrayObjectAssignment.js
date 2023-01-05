console.log(`A) Created the class and added the data members.`);
console.log(
  `--------------------------------------------------------------------------------------------------------------------------------`
);
class Bank {
  constructor(bankName, location, accountNo, ifsc, intrestRate) {
    this.bankName = bankName;
    this.location = location;
    this.accountNo = accountNo;
    this.ifsc = ifsc;
    this.intrestRate = intrestRate;
  }
}
const bankAxis = new Bank("Axis Bank", "Jalgaon", 334466, "AXB0000123", "10%");
const bankSbi = new Bank("SBI Bank", "Dharangaon", 5484661, "SBI0000233", "9%");
const bankIcici = new Bank(
  "ICICI Bank",
  "Chopda",
  3339884,
  "ICICI0000343",
  "8%"
);
const bankKotak = new Bank(
  "Kotak Bank",
  "Amalner",
  217221,
  "KTK0000553",
  "8.5%"
);
const bankHdfc = new Bank("HDFC Bank", "Parola", 6124166, "HDFC0000883", "10%");
const bankPunjab = new Bank(
  "Punjab Bank",
  "Pachora",
  889973,
  "PJ0000137",
  "11%"
);
console.log(`B) Create the following objects.`);
console.log(bankAxis);
console.log(bankSbi);
console.log(bankIcici);
console.log(bankKotak);
console.log(bankHdfc);
console.log(bankPunjab);
console.log(
  `--------------------------------------------------------------------------------------------------------------------------------`
);
console.log(
  `C) By using for of loop traverse the array and find bank name and location.`
);
const arrayOfBanks = [
  bankAxis,
  bankSbi,
  bankIcici,
  bankKotak,
  bankHdfc,
  bankPunjab,
];
for (const banks of arrayOfBanks) {
  console.log(`Bank Name: ${banks.bankName} , Location: ${banks.location}`);
}
console.log(
  `--------------------------------------------------------------------------------------------------------------------------------`
);
console.log(`D) Find the object which has bank name - Kotak Bank.`);
for (const kotakBank of arrayOfBanks) {
  if (kotakBank.bankName == "Kotak Bank") {
    console.log(kotakBank);
  }
}
console.log(
  `--------------------------------------------------------------------------------------------------------------------------------`
);
console.log(`E) Using for loop and log the Bank Details.`);
for (const bankDetails of arrayOfBanks) {
  console.log(bankDetails);
}
console.log(
  `--------------------------------------------------------------------------------------------------------------------------------`
);
