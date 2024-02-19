var result = 'hello' / 2
// console.log(result);


var sum = 0.1 + 0.2
// console.log(sum.toFixed(1));


var result2 = 5 * "hello"
// console.log(result2); 

var compare = 5 == 5 // == value check karta hy
// console.log(compare);


var compare = 5 === "5" // === value and type check karta hy 
// console.log(compare);

var compare = 5 != 5 // != value check karta hy
// console.log(compare); 


// Logical Operator

var isAge = 18;
var hadDrivingLicense = true;

if (isAge >= 18 && hadDrivingLicense) {
    console.log('Eligible to drive');
} else {
    console.log('not Eligible to drive');
}

// Ternary operator || condional operator
var age = 20;
var message = age >= 18 ? 'Eligible to drive' : 'not Eligible to drive';
console.log(message);



var studentMark = 70;
var result = studentMark >= 60 ? 'Pass' : 'failed';
console.log(result);


console.log("5" - 3); // Output 2
console.log(2 < 15 < 5); 
console.log("20" + 10 + 10); // 201010