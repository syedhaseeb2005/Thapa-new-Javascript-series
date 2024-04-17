// Let KeyWord : //" the let keyword is use to declare variable with block scope. Variables declared with let are mutable , meaning their value can be reassigned."//

// let myname = 'syedhaseeb'
// myname = "syedhaseebahmed"
// console.log(myname);


// const KeyWord : //" the const keyword is use to declare variable with block scope, but once a value is assigned to  a const variable it cannot be reassigned.const variable are immutable "//

// const myname = 'syedhaseeb'
// myname = "syedhaseebahmed"
// console.log(myname);

// ***************************************************************************//


// 1st what var can do 

// if(true){
//    var name = "haseeb"
//     console.log(name);
// }

// name = "ahmed"
// console.log(name);


// 2nd what let can do 

// if(true){
//    let name = "haseeb"
//     console.log(name);
// }

// name = "ahmed" 
// console.log(name);


// Template Sring es2015
// IN EcmsScript , template String also known as  template literal, provide a convenient and flexible  way to create a string in Javascript. Template String are enclosed in backticks (``) rather than a single or double quote

let firstname = 'Syed';
let lastname = 'Haseeb';

let fullname = `${firstname} ${lastname}`;
// console.log(fullname);


// String Interpolation : Template String support string interpolation, allowing you to embed expressions directly with in string. Interpolated expression are enclosed in ${}


let age = 20;

// let messgae = `Hello, my age is ${age}`
// console.log(messgae);



// ***********************Practice****************************
let num = 6
// console.log("5 * " + num + ' = ' + 5 * num);
// console.log(`5 * ${num} = ${5 * num}`);



// Fat Arrow Function
// IN EcmaScript 6 , arrow function also known as fat arrow function ,were introduced as a concise way to write anonymous functions


// const sum = (a,b) => {
//     let result = `the sum of ${a} and ${b} is ${a + b}`;
//     console.log(result);
// }
// sum(20 , 10)


// Object Properties - Modren Javascript 
const name = "SyedHaseeb";
const myage = 20;

// traditional way
const person = {name: name, myage: myage}
// console.log(person);
// Using shorthand notation for object property 
const person1 = {name, myage}
// console.log(person1);


// Destructuring Array 

// Extracting specific elements from an array

const number = [1, 2, 3, 4]
// const first = number[0]; // Traditional way
// const [first,second ,third ,fourth] = number;
// console.log(first);

// Ignoring elements from an array
const [,,,fourth] = number;
// console.log(fourth);


// Interview Question
let a = 10;
let b = 30;

// Modify will do 3rd variable
// let c = b // 30
// b = a // 10
// a = c // 30
// console.log(a);
// console.log(b);

// without using 3rd variable
[a , b] = [b , a]
console.log(a,b);