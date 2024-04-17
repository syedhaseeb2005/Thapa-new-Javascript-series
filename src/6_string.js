// indexof 

let str = "Syed Haseeb"
// console.log(str.indexOf("b"));

// let strArr = Array.from(str)
// strArr.map((item,index)=>{
//     console.log(`${item} - ${index}`);
// })


// last indexof 
// const msg = "Hello JavaScript, welcome to our JavaScript Hello course."
// let lastIndex = msg.lastIndexOf("Hello")
// console.log(lastIndex);


// search method if not found that return -1 
// let search = msg.search(/javascript/i)
// console.log(search);

// match method if not found that return null

// let match = msg.match(/JavaScript/g)
// console.log(match);

//  matchAll method if not found that return empty iterator

// let matchAll = msg.matchAll(/JavaScript/gi)
// console.log(matchAll);

// for (const iterator of matchAll) {
//     console.log(iterator[0]);
// }


// includes method return true if the string contains the specified value otherwise false return

// const inlcude = msg.includes("to")
// console.log(inlcude);


// slice method copy the string 

const myname = 'syed haseeb'
const checkSlice = myname.slice(1)
// console.log(checkSlice);

// subString extract a part of the string 

const subString = myname.substring(2)
// console.log(subString);

// slice or substring me differnece hy ky jab ap substring me -1 likho to wo apko pora data dy dy jabky slice me apko backward me data lakar dy dy ga


// replace method 
// const msg = "Hello JavaScript, welcome to our JavaScript Hello course."
// const replace = msg.replace(/JavaScript/g, "TypeScript") //regular expression
// console.log(replace);


// charAt method check karta index par konsa characters hy or agar -1 kary to empty string dy ga
// const msg = "Hello JavaScript, welcome to our JavaScript Hello course."
// const charat = msg.charAt(8) 
// console.log(charat);

// trim : Removing whitespace from starting and ending strings
// const msg = "   Hello JavaScript, welcome to our JavaScript course.   "
// console.log(msg);
// const removeSpace = msg.trim()
// console.log(removeSpace);

// *****************************************************************************
// Practice

// Write a javascript function that print the letter a to z in the console 

// for (let i = 97; i <= 122; i++) {
//     console.log(`${i} - ${String.fromCharCode(i)}`)
// }


// *********************************************************************

// write a function to check if all vowel present in string or not 

// const checkAllVowel = (str) => {
//     let vowel = "aeiou"
//     for (const char of vowel) {
//         // console.log(char);
//         // console.log(str.includes(char));
//         if(!str.includes(char)){
//             return false
//         }
//     }
//     return true
// }
// console.log(checkAllVowel("douleia"));
// console.log(checkAllVowel("Syed Haseeb"));

// ***************************************************************************



// write a function to count the number of vowel in  a string
// const countVowel = (str) => {
//     let vowel = "aeiou"
//     let count = 0;
//     for (const char of str) {
//         // console.log(char);
//         // console.log(str.includes(char));
//         if (vowel.includes(char)) {
//             count++
//         }
//     }
//     return count
// }
// console.log(countVowel("Syed Haseeb"));
// console.log(countVowel("douleia"));

// **************************************************************************


const isPangram = (str) => {
    let input = str.toLowerCase().split("")
    const value = input.filter((item) => {
        return item.charCodeAt() >= 'a'.charCodeAt() && item.charCodeAt() <= 'z'.charCodeAt()
    })
    return [...new Set(value)].length === 26
}
console.log(isPangram("The quick brown fox jumps over the lazy dog"));