const result = function sum(a, b) {
    return a + b
}
console.log(result(10, 20));


function greet(name) {
    return `Hello ${name}, Welcome to JS Course!`
}
console.log(greet('Syed Haseeb'));


// *********************Anonymous Functions **********************
const result2 = function (a, b) {
    return a + b
}
console.log(result2(100, 20));


// ****************** immediately invoked function Expression ****************
(function (a, b) {
    console.log(a * b);
})(5, 5)


// ************************* Practice ************************

// const calculator  = (num1,num2,operator) =>{
//     if(operator === '+'){
//         return num1 + num2
//     }else if(operator === '-'){
//         return num1 - num2
//     }else if(operator === '*'){
//         return num1 * num2
//     }else if(operator === '/'){
//         return num1 / num2
//     }else{
//         return 'Invalid Operator'
//     }
// }

// console.log(calculator(5,2,'-'));

const calculator = (num1, num2, operator) => {

    switch (operator) {
        case '+':
            return num1 + num2
        case '-':
            return num1 - num2
        case '*':
            return num1 * num2
        case '/':
            return num1 / num2
        default:
            return 'Invalid Operator';
    }
}

console.log(calculator(5, 2, '/'));


//Reverse a string
// Write a function that reverses a given string without using built-in reverse methods

// const reverse = (str) =>{
//     let reversed = "";
//     for(let char = 0 ; char < str.length ; char++){
//         reversed = str[char] + reversed;
//     }
//     return reversed;
// }
// console.log(reverse("beesah deys"));

const reverse = (str) =>{
    let reversed = "";
    for(let char = str.length - 1  ; char >= 0  ; char--){
        reversed = reversed + str[char];
    }
    return reversed;
}
console.log(reverse("beesah deys"));


// *****************************************************************//

// Palindrome a string


// const reverse = (str) => {
//     let reversed = "";
//     for (let char = 0; char < str.length; char++) {
//         reversed = str[char] + reversed;
//     }
//     str === reverse ?
//         console.log(`${str} is not a palindrome`) :
//         console.log(`${str} is a palindrome`)
//     return reversed;
// }
// reverse("racecar");