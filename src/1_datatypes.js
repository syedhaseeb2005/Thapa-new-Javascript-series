// Data type define  the type of values that a variable can hold

// Type of primitive data type 

// 1. String   // it represent the character enclosed with single & double quotes

var my_name = "haseeb"
console.log(my_name);

// 2. Number // it represent the number inluding interger and floating point numbers

var FavNum = 29;
console.log(FavNum );

// 3. Boolean // it represent the boolean inluding true and false values

var isMarried = true;
console.log(isMarried);


// 4. Undefined // it represent the undefined where the value is not defined 

var myName;
console.log(myName);

// 5. Null // it represent the null where the value is emty

var myAge = null;
console.log(myAge);
console.log(typeof myAge);


// 6. Symbol

var mySymbol = Symbol('hello');
console.log(mySymbol);

// 7. BigInt

var myBigInt = BigInt(100 + 1);
console.log(myBigInt);

// Type of non-primitive data type

// 1. Object
// 2. Array
// 3 . Date


// ParseInt and ParseFloat


// ParseInt: pareseInt is used to to pares a string and convert it to a integer whole number 

// Example 
// const string = "42"
// const mynumber = parseInt(string)
// console.log("mynumber:" + mynumber);
// console.log("type:" + typeof mynumber);


// ParseFloat: parseFloat is used to to pares a string and convert it to a floating point number

const string = "42.777"
const mynumber = parseFloat(string)
console.log("mynumber:" + mynumber);
console.log("type:" + typeof mynumber);


if(NaN == NaN){
    console.log("true")
}else{
    console.log("false")
};
