// Conditional Statements
// ******************************************************

// if else statements 

var temperature = 40;

if (temperature >= 30) {
    console.log('Lets go to farmhouse');
} else {
    console.log('Stay at home');
}

// ******************************************************

var Age = 18;
var isCitizen = true;
var RegisteredtoVote = false;


// if (Age >= 18 && isCitizen && RegisteredtoVote) {
//     console.log('You can vote');
// } else if (Age >= 18 && isCitizen == false && RegisteredtoVote == true) {
//     console.log('You are not eligible due to citizenShip Status');
// } else if (Age >= 18 && isCitizen == true && RegisteredtoVote == false) {
//     console.log('You are not eligible due to Registered vote');
// } else if (Age >= 18 && isCitizen == false && RegisteredtoVote == false) {
//     console.log('You are not eligible due to citizenShip Status and Registered vote');
// } else {
//     console.log('You are not eligible to vote');
// }

// ******************************************************

if (Age >= 18) {
    if (isCitizen) {
        if (RegisteredtoVote) {
            console.log('You can vote');
        } else {
            console.log('You are not eligible to due to Registered');
        }
    } else {
        console.log('You are not eligible due to citizenShip Status');
    }
} else {
    console.log('You are not eligible to vote');
}


// ******************************************************

// Check even and odd

var num = 6

if (num % 2 == 0) {
    console.log('Even');
} else {
    console.log('Odd');
}

// ******************************************************

// switch statement

var day = 'Sunday'


switch (day) {
    case 'Monday':
        console.log('Its Monday');
        break;
    case 'Tuesday':
        console.log('Its Tuesday');
        break;
    case 'Wednesday':
        console.log('Its Wednesday');
        break;
    case 'Thursday':
        console.log('Its Thursday');
        break;
    case 'Friday':
        console.log('Its Friday');
        break;
    case 'Saturday':
        console.log('Its Saturday');
        break;
    case 'Sunday':
        console.log('Its Sunday');
        break;
    default:
        console.log('Invalid Day');
}

// ******************************************************

var areaofShape = "rectangle";
var a = 5;
var b = 10;
var result;
switch (areaofShape) {
    case "square":
        result = a * a;
        console.log(result);
        break
    case "rectangle":
        result = a * b;
        console.log(result);
        break
    case "circle":
        var r = 2;
        result = 3.14 * (r * r);
        console.log(result);
        break
    default:
        console.log("No shape Found");
}

// ******************************************************

// While loop

// Table 5 
// let i = 1
// while (i <= 10) {
//     document.write(`5 x ${i} = ${i * 5}<br>`);
//     i++
// }

// ******************************************************

// do - while loop 

// let k = 1
// do{
//     console.log(k * 3);
//     k++;
// }while(k <= 10);

// ******************************************************

// let userInput;
// let positiveNumber;
// do {
//     userInput = prompt('Enter a positive number');
//     positiveNumber = parseFloat(userInput);
// } while (isNaN(positiveNumber) || positiveNumber < 0)
// console.log(`You entered ${positiveNumber}`);



// ******************************************************

// // for Loop
// for (let i = 0; i <= 10; i++) {
//     console.log(i);
// }

// ******************************************************
// table 5
// for (let i = 1; i <= 10; i++) {
//     document.write(`5 x ${i} = ${i * 5}<br>`);
// }


// ************************practice******************* 


// ****************************************************************
// var sum = 0;
// for (let i = 1; i <= 10; i++) {
//     var sum = sum + i;
//     document.write(sum + "<br>");
// }

// ***************************************************************
// var sum =  11;
// var isPrime = true;

// for(var i = 2; i < sum; i++){
//     if(sum % i == 0){
//         isPrime = false;
//         break;
//     }
// }
// if(isPrime){
//     console.log("Number is prime");
// }else{
//     console.log('Number is not prime');
// }


// ******************************************************************

var year = 2024;


if (year % 4 == 0 && year % 100 !== 0 || year % 400 === 0) {
    console.log('Its a Leap Year');
} else {
    console.log('Its not a Leap Year');
}



// ******************* Patterns **************************


// ****************** Practice 1 ******************

// for(let i =1; i<=5; i++){
//     for(let j =1; j<=i; j++){
//         document.write('*')
//     }
//     document.write('<br>')
// }


// ****************** Practice 2 ******************


// for (let i = 1; i <= 5; i++) {
//     // for spacing 
//     for (let k = 1; k <= 5 - i; k++) {
//         // document.write('&nbsp&nbsp')
//         document.write('&nbsp&nbsp')
//     }
//     for (let j = 1; j <= i; j++) {
//         document.write('*')
//     }
//     document.write('<br>')
// }



// ****************** Practice 3 ******************


// for (let i = 1; i <= 5; i++) {
//     // for spacing 
//     for (let k = 1; k <= 5 - i; k++) {
//         document.write('&nbsp&nbsp')
//     }
//     for (let j = 1; j <= i; j++) {
//         document.write('*')
//     }
//     for (let l = 1; l < i ; l++) {
//         document.write('*')
//     }
//     document.write('<br>')
// }

// ****************** Practice 4 ******************

// for (let i = 5; i >= 1; i--) {
//     for (let k = 1; k <= 5 - i; k++) {
//         document.write('&nbsp;&nbsp')
//     }
//     for (let j = 1; j <= i; j++) {
//         document.write('*')
//     }
//     for (let l = 1; l < i; l++) {
//         document.write('*')
//     }
//     document.write('<br>')
// }

// ****************** Practice 5 ******************


// for (let i = 1; i <= 5; i++) {
//     // for spacing 
//     for (let k = 1; k <= 5 - i; k++) {
//         document.write('&nbsp&nbsp')
//     }
//     for (let j = 1; j <= i; j++) {
//         document.write('*')
//     }
//     for (let l = 1; l < i ; l++) {
//         document.write('*')
//     }
//     document.write('<br>')
// }


// ****************** Practice 6 ******************

// for (let i = 1; i <= 5; i++) {
//     // for spacing 
//     for (let k = 1; k <= 5 - i; k++) {
//         document.write('&nbsp&nbsp')
//     }
//     for (let j = 1; j <= i; j++) {
//         document.write('*')
//     }
//     for (let l = 1; l < i ; l++) {
//         document.write('*')
//     }
//     document.write('<br>')
// }

// for (let i = 4; i >= 1; i--) {
//     for (let k = 1; k <= 5 - i; k++) {
//         document.write('&nbsp;&nbsp')
//     }
//     for (let j = 1; j <= i; j++) {
//         document.write('*')
//     }
//     for (let l = 1; l < i; l++) {
//         document.write('*')
//     }
//     document.write('<br>')
// }

// ****************** Practice 7 ******************

for (let i = 4; i >= 1; i--) {
    for (let k = 1; k <= 5 - i; k++) {
        document.write('&nbsp;&nbsp')
    }
    for (let j = 1; j <= i; j++) {
        document.write('*')
    }
    for (let l = 1; l < i; l++) {
        document.write('*')
    }
    document.write('<br>')
}
for (let i = 2; i <= 5; i++) {
    // for spacing 
    for (let k = 1; k <= 5 - i; k++) {
        document.write('&nbsp&nbsp')
    }
    for (let j = 1; j <= i; j++) {
        document.write('*')
    }
    for (let l = 1; l < i ; l++) {
        document.write('*')
    }
    document.write('<br>')
}
