// Using Array constructor

// const fruits = new Array('apple', 'orange', 'banana');
// console.log(fruits);


// const person = Array.of('haseeb', 'jawad','ayan')
// console.log(person);

// Using Array Literal

// const sports = ['cricket','football','baseball']
// console.log(sports);


// Accessing Eelemnt

// const sports = ['cricket','football','baseball']
// console.log(sports[0]);


// Modifing the Element

// const sports = ['cricket','football','baseball']
// sports[2] = "vollyball"
// console.log(sports);


// Array Travasel / Iterating Over Loop 

// 1) for of loop ,also known as Iterating

// for of loop: the for of loops uset to iterate over the values of an iterable object such as array ,string or other iterable object


// const sports = ['cricket', 'football', 'baseball', 'vollyball', 'golf']

// for of loop
// for (const iterator of sports) {
//     console.log(iterator);
// }

// for loop
// for (let item = 0; item < sports.length; item++) {
//     console.log(sports[item]);
// }


// for in loop 

// for (const item in sports) {
// console.log(item);
// }

// ********************************************************* //

// for each and map 

// forEach : the forEach method calls a function for each element in an array.the provided function may perform any kind of operation on the element of the given array

// sports.forEach((item , index , arr)=>{
//     console.log('item=>>',item);
//     console.log('index=>>',index);
//     console.log('arr=>>',arr);
// })

// map : the map method creates a new array populated with the results of calling a provided function on every element in the calling array and doesn't change the original array

// sports.map((item , index)=>{
//     console.log(`${item} ${index}`);
// })


// ********************************************************************* //

// Practice Time 

// Write a program to Multiply each element with 2 

// const number = [1,2,3,4,5]

// number.forEach((num)=>{
// console.log(num * 2);
// Perform the action on each element
// })


// const mapArr = number.map((num)=>{
// return num * 3;
// create a newArray with tranformed element 
// })
// console.log(mapArr);


// Insert , Add , Remove and Delete Elements in Array (crud)
// Add element at last

// const sports = ['cricket', 'football', 'baseball', 'vollyball']
// const addElemntatLast = sports.push('golf')
// console.log(addElemntatLast);

// Remove element from last

// const removeElemntatLast = sports.pop('vollyball')
// console.log(removeElemntatLast);
// console.log(sports);


// Add element at first

// const addElemntatfirst = sports.unshift('golf')
// console.log(addElemntatfirst);

// remove element at first

// const removeElemntatfirst = sports.shift('cricket')
// console.log(removeElemntatfirst);
// console.log(sports);


// what if we add or delete and element anywhere in array elements

// Splice
// const sports = ['cricket', 'football', 'baseball', 'vollyball']
// const deleteElement = sports.splice(0,1,"golf")
// console.log(deleteElement);
// console.log(sports);

// Slice
// const InsertElement = sports.slice(0,2)
// console.log(InsertElement);

// ********************************************************************//

// Searching and filter in an array 

// For Search we have - index-of, lastIndexOf & Includes 

// indexOf Method:  the index of method returns the first index at which given element can be found in the array or -1 if its not present

// const person = ['haseeb','ayan','noman','ali']
// console.log(person.indexOf('ali'));


// lastIndexOf : lastIndexOf method of array instance return the lastindex at which a given element can be found in the array, or -1 if there is no such element. the arrayis searched backwards starting from at fromIndex

// const person = ['haseeb','ali','noman','ali']
// console.log(person.lastIndexOf('ali',2));


// includes : the includes method returns true if a given element is present in the array, or false if not.

const person = ['haseeb', 'ayan', 'noman', 'ali']
// console.log(person.includes('ali'));

// ***************************************************************************//

// Challenge time 

// 1: Add Dec at the end of Array 
// 2: Whtat is the return value of splice method 
// 3: Update march to March ?
// 4: Delete june from array

// const month = ['Jan','mar', 'Apr', 'Jun','Jul']
//1
// console.log(month.push('Dec'));
//2
// whenn you use add element the splice method returns an empty array 

//3
// console.log(month.splice(1,1,"Mar"));
//4
// console.log(month.splice(3,1));

// ********************************************************** //

// Fitering the array 

// Filter Method : The filter method creates a new array with all elements that pass the test implemented by the provided function.

// const number = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// const filterNumber = number.filter((num) => {
//     return num > 5
// })
// console.log(filterNumber);

//**************************************************************//

// let see user want to delete the 6 
// let value = 6;
// let number = [1, 2, 3, 4, 6, 5, 6, 7, 8, 9]

// let updated = number.filter((num) => {
//     return num !== value
// })
// console.log(updated);


// *****************************************************************

//  Filtering Product

// const product = [
//     {
//         name: "Laptop",
//         price: 1200,
//     },
//     {
//         name: "Phone",
//         price: 800.
//     },
//     {
//         name: "Tablet",
//         price: 300,
//     },
//     {
//         name: "SmartWatch",
//         price: 150
//     }
// ]

// const filterNumber = product.filter(pro => pro.price <= 500)
// console.log(filterNumber);


// Filtering the unique value
const number = [1, 2, 3, 4, 6, 5, 6, 7, 8, 9]
const uniqueNumber = number.filter((num,index,arr)=>{
    return arr.indexOf(num) === index;
})
console.log(uniqueNumber);

// *************************************************************// 

// Find Method : The find is used to find the first element of the array that satisfies a providing testing function.It return the first matching element or undefined if no matching element.


// const number = [1, 2, 3, 4, 5, 6, 4, 7, 8, 9, 10, 6]

// const matchingElement = number.find((num)=>{
//     return num > 5;
// })
// console.log('matchingElement=>>', matchingElement);


// FindIndex Method : The findIndex method of TypedArray instance returns the index of the first element in a typed array that satisfies the provided testing function.If no element satisfing the testing function,-1 is returned

// const number = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// const result = number.map(current => current * 5)
// console.log(result);
// const result2 = result.findIndex((num)=>{
//     return num > 15;
// })
// console.log('result2=>>', result2);

// *****************************************************************//

// Sort Method : The sort method sorts the elements of an array in place and returns the sorted array.by default it sorts elements is string

// const number = [2, 3, 2, 3, 4, 10, 6, 1, 8, 9]
// number.sort((a, b) => a - b);
// console.log(number);


// for ascending syntax 
// const sortnumber = number.sort((a, b) =>{
//     if(a > b){
//         return 1;
//     }else{
//         return -1;
//     }

// })
// for decending syntax 
// const sortnumber = number.sort((a, b) => {
//     if (a > b) {
//         return -1;
//     } else {
//         return 1;
//     }

// })
// console.log(sortnumber);


// ******************************************************************************//

// const number = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// const result = number.map((num) => {
//     if(num % 2 === 0){
//         return num * num
//     }
// }).filter((num) => num !== undefined)
// console.log(result);


// const names = ['haseeb', 'ayan', 'noman', 'ali']

// const prefixName = names.map((name) => `Mr.${name}`)
// console.log(prefixName);


// Reduce Method 

// const productPrice = [1200, 800, 300, 150]

// const totalPrice = productPrice.reduce((accu , currentVal)=>{
//     return accu + currentVal;
// },0)
// console.log(totalPrice);
// console.log(typeof totalPrice);