// Creating Object

const myInfo = {
    name: "SyedHaseeb",
    class: "bscs",
    Hobbies: ["cricket", "coding", "swimming"],
    address: {
        country: "Pakistan",
        city: "Karachi"
    },
    age: 19,
    islicenced: false,
}

// Accessing Object

// console.log(myInfo["address"]); //square brackets
// console.log(myInfo.name); // dot notation

// Adding and modifying

// myInfo.job = "Jobless";
// console.log(myInfo);


// Pass by value 

// let a = 10;
// const modifying = (x) => {
//     return x = 20
// }
// console.log(modifying(a));
// console.log(a); // is ka mtlb hy ky jo a ki value hy wo original rahi gi sirf copy sy khely ga 


// pass by reference 

// let obj = {
//     id: 5,
//     name: "Haseeb"
// }
// let obj1 = obj;
// obj1.name = "Syed Haseeb";
// console.log(obj1);
// console.log("orignal ",obj);


// Object.assign() : is used to copy properties from one or more source objects to a target object 


let obj = {
    id: 5,
    name: "Haseeb"
}

let newObj = Object.assign({}, obj);
newObj.name = "SyedHaseeb";
// console.log(newObj);
// console.log(obj);



// this ------------- object

// function callme () {
//     console.log(this);
// }
// callme();



//* Regular function Expression *//
// const obj1 = {
//     name: "Haseeb",
//     greet : function () {
//         console.log(this);
//     },
// }
// obj1.greet();

// In this example the greet method is defined using the "Method using shorthand" syntax. Its more concise way to define method in object literals.
// const obj1 = {
//     name : "Haseeb",
//     greet() {
//         console.log(this);
//     }
// }
// obj1.greet();

// Fat Arrow Function 
// const obj1 = {
//     name : "Haseeb",
//     greet : () => {
//         console.log(this);
//     }
// }
// obj1.greet();
// Fat arrow function me this method refer to global object

// *************************************************************************\

// Object Useful Methods

const product = {
    id: 1,
    name: "Laptop",
    category: "Computer",
    brand: "ExampleBrand",
    price: 999.99,
    stock: 50,
    description: "Product description",
}

// Object.keys();  returns an array of all the keys in the object

let keys = Object.keys(product);
// console.log(keys);
// console.log(typeof keys);

// Object.values(); returns an array of all the values in the object

let value = Object.values(product);
// console.log(value);
// console.log(typeof value);

// Object.entries(); returns an array of arrays, where each inner array contains a key and a value

let entries = Object.entries(product);
console.log(entries);
console.log(typeof entries);


// Object.assign(); copies properties from one or more source objects to a target object
const target = {
    a: 1,
    b: 2
};
const source = {
    b: 3,
    c: 4
};
const mergedObject = Object.assign({}, target, source);
// console.log(mergedObject);
// console.log(target);
// console.log(source);


// Object.freeze(); freezes an object,preventing new properties from being added to it and existing properties from being removed or modified

Object.freeze(product);
product.id = 999;
// console.log(product);


// ***************************** Practice **************************************

// let student = {
//     name : 'Haseeb',
//     age : 18,
//     grade : {
//         math : 90,
//         urdu : 80,
//         english : 70,
//     }
// }

// const addsubjectGrade = (student, subject, grade) => {
//     if(!student.grade){
//         student.grade = {};
//     }
//     return student.grade[subject] = grade;
// }

// addsubjectGrade(student,"computer",95);
// console.log(student);

// ****************************************************************************

// const AreObjectEqual = (obj1, obj2) => {
//     let o1 = Object.keys(obj1);
//     let o2 = Object.keys(obj2);
    
//     o1.length !== o2.length ? false : true;

//     for (const key in obj1) {
//         if(obj1[key] !== obj2[key]){
//             return false;
//         }
//     }
//     return true;
// };


// let obj1 = {
//     name: 'Haseeb',
//     age: 19,
//     city: "Karachi",
// }
// let obj2 = {
//     name: 'Haseeb',
//     age: 19,
//     city: "Karachi"
// }
// let obj3 = {
//     name: 'Ayan',
//     age: 30,
//     city: "Lahore"
// }

// console.log(AreObjectEqual(obj1, obj2));

// ***************************************************//

const arraytoObj = (array) => {
    let obj = {};
    for (const key of array) {
        obj[key.id] = key;
    }
    return obj;
}

let inputArray = [
    {id : 1 , name : "Haseeb"},
    {id : 2 , name : "Ayan"},
    {id : 3 , name : "Jawad"},
]

console.log(arraytoObj(inputArray));