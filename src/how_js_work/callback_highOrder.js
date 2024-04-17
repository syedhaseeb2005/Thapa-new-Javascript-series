// Fisrst class function
function sayHello(name) {
    return `Hello ${name}!`
}

const greetFunction = sayHello;

console.log(greetFunction("Haseeb"));


// CallBack Function

function processedtoInput(name, callback) {
    console.log('Receivedinput:' + " " + name);
    callback(name)
}

function callback(name) {
    console.log('Hello ' + name);
}
processedtoInput("haseeb", callback)


// ******************************* Practice *****************************************

const mathoperation = (a, b , operation) => {
    return operation(a,b)
}

const add = (a, b) => {
    return a + b;
}
const sub = (a, b) => {
    return a - b;
}


console.log(mathoperation(10, 20, add));
console.log(mathoperation(30, 20, sub));