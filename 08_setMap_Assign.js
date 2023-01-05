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

const mapOfBanks = new Map();
mapOfBanks.set(334466, bankAxis);
mapOfBanks.set(5484661, bankSbi);
mapOfBanks.set(3339884, bankIcici);
mapOfBanks.set(217221, bankKotak);
mapOfBanks.set(6124166, bankHdfc);
mapOfBanks.set(889973, bankPunjab);
console.log(
  `-------- Creating map in such way that account number as Key and object as a Value. --------`
);
const keysOfMap = mapOfBanks.keys();
console.log(`Keys:`);
console.log(keysOfMap);
console.log(`Values:`);
for (const key of keysOfMap) {
  console.log(mapOfBanks.get(key));
}
console.log(
  `--------------------------------------------------------------------------------------------------------------------------------`
);
console.log(
  `-------- Traverse the map and log - bankName, accountNumber and intrestRate. --------`
);
const keyOfMapBank = mapOfBanks.keys();
for (const key of keyOfMapBank) {
  const Bank = mapOfBanks.get(key);
  console.log(Bank.bankName, Bank.accountNo, Bank.intrestRate);
}
console.log(
  `--------------------------------------------------------------------------------------------------------------------------------`
);
