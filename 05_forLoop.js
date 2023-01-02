//Print the numbers from 1 to 10
// Initialization     Update     Condition
for (let index = 1; index < 10; index++) {
  console.log(index);
   }

//Print the numbers 50 45 40 --------5
   for (let index = 50; index >= 5; index=index-5) {
      console.log(index);
   }


// Print numbers from 0 to 10
// initialization 0   condition <=10   update expre = ++
var i=0;    // i = 0 1 2  10  11
while (i<=10) {   // true true 
   console.log(i);  //0 1 2   10
   i++; // 1 2  10  11
}
// Print numbers from 50 to 5
// initialization i=50   condition >=5   update expre = i-5
var i=50;  
while (i>=5) { 
   console.log(i);  
   i= i-5; 
}
// Print Table of 7
// initialization i=50   condition >=5   update expre = i-5
var i=7;  
while (i<=70) { 
   console.log(i);  
   i= i+7; 
}


//  Print numbers from 0 to 10
//  initialization 0   condition <=10   update expre = ++
var index =0;
do {
    console.log(index);
    index++;
} while (index<=10);

// Print 70 to 7 by decrementing each time 7
 // 70  63  56  
var index =70;
do {
  console.log(index);
   index = index-7; 
} while (index>=7);
