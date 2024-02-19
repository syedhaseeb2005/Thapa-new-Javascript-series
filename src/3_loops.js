// Conditional Statements

// if else statements 

var temperature = 40;

if (temperature >= 30) {
    console.log('Lets go to farmhouse');
} else {
    console.log('Stay at home');
}


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


// Check even and odd

var num = 6

if (num % 2 == 0) {
    console.log('Even');
} else {
    console.log('Odd');
}


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