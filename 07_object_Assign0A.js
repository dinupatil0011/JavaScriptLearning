const professor = {

}
professor.name = "Shirish Patil",
professor.gender = "Male",
professor.age = 59,
professor.city = "Jalgaon",

console.log(`1) All the properties`);
console.log(professor);

console.log(`2) Include nested object "Degrees."`);
professor.degrees = {
    Engineering:`CSC`,
    PHD: `Adv Computing`,
    Award: `Best Professor of the year-2021`,
    }
console.log(professor.degrees);

console.log(`3) Include nested object "Certificates."`);
professor.certificates = {
    Certificate1: "Hacker Rank Participation",
    Certificate2: "Certificate in IFE course",
    Certificate3: "Certificate in Adv Programming",
}
console.log(professor.certificates);

console.log(`4) Add function which will concate all the Degrees.`);
console.log(professor.degrees);
console.log(`The total degrees of professor are : CSC,Adv Computing,Best Professor of the year-2021`)

   console.log(`5) Add new property.`);
   professor.nature = "Pure";
console.log(professor);

console.log(`6) Modify existing property.`);
professor.age = 63;
console.log(professor);

console.log(`7) Delete any one certificate.`);
delete professor.certificates.Certificate2;
console.log(professor.certificates);

console.log(`8) Add new certificate in nested object "Certificates."`);
professor.certificates={
    Certificate1: "Hacker Rank Participation",
    Certificate2: "Certificate in Adv Programming",
    newCertificate: "CCC",
   }
   console.log(professor.certificates);

console.log(`9) Log the nested object certificate on console.`);
console.log(professor.certificates);

