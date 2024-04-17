// const currentDate = new Date();
// console.log(currentDate);

// Create Date object based on datestring 

// const dateString = "2024-03-06T20:53:14.833Z"
// const datefromString = new Date(dateString);
// console.log(dateString);

// Create a date object with the specified year and month
// const date1 = new Date(2024,1)
// console.log(date1);


// Create a date object with the specified year,month & day
// const date1 = new Date(2024,2,12)
// console.log(date1);


// Create a date object with the specified year,month , day , hour , minute, second
// const date1 = new Date(2024,2,7,8,50,2)
// console.log(date1);


// Create a date object representing the number of milliseconds since the unix epoch (Jan 1, 1970, 00:00:00 GMT)

// const CurrentMillisecond = new Date().getTime();
// const datefromMillisecond = new Date(CurrentMillisecond)
// console.log(datefromMillisecond);
// console.log(typeof CurrentMillisecond);


// Javascript Date Get Method

// const currentDate = new Date()
// const year = currentDate.getFullYear()
// console.log(year);
// const month = currentDate.getMonth()
// console.log(month);
// const date = currentDate.getDate()
// console.log(date);
// const day = currentDate.getDay()
// console.log(day);


// Javascript Date Set Method
// const date = new Date()
// date.setFullYear(2026)
// date.setMonth(1)
// date.setDate(12)
// console.log(date);


// Javascript Get Time Method
// const currentTime = new Date()
// const hours = currentTime.getHours()
// const minutes = currentTime.getMinutes()
// const seconds = currentTime.getSeconds()
// const time = currentTime.getTime() //Milliseconds since January 1, 1970, 00:00:00 UTC.
// console.log(time);


// Javascript set time Method 
// const currentTime = new Date()
// currentTime.setHours(12)
// currentTime.setMinutes(55)
// currentTime.setSeconds(30)
// console.log(currentTime);


// LocalString : Return a string representing the date and time portion of a date object using the current locals conventions

// const date = new Date()
// const localString = date.toLocaleString()
// console.log(localString);


// LocalDateString : Return a string representing the date portion of a date object using the current locals conventions

// const date = new Date()
// const localdateString = date.toLocaleDateString()
// console.log(localdateString);



// LocalTimeString : Return a string representing the time portion of a date object using the current locals conventions

// const date = new Date()
// const localtimeString = date.toLocaleTimeString()
// console.log(localtimeString);


// Parse : Parse a string representing of a  date & Return the number of milliseconds since January 1, 1970, 00:00:00 UTC for a date object

// const dateString = "2024-03-19T16:30:00Z";
// const parsedDate = Date.parse(dateString);
// console.log(parsedDate);
// console.log(typeof parsedDate);



// const date = new Date()
// console.log(Date.now());  // give millisecond return the number
// console.log(date.getDate()); // give millisecond

// *************************************************************************

// Write a function to add a specified number of days to a given date

// const addDaystoDate = (date, Extradays) => {
//     // console.log(date);
//     // console.log(new Date(1707850800000));
//     let updateDate = date.setDate(date.getDate() + Extradays) 
//     return new Date(updateDate)
// }
// // ex: 
// const date = new Date("2024-02-7")
// const newDate = addDaystoDate(date,7)
// console.log(newDate.toLocaleDateString());


// Write a function to caluclate the difference between in days b/w two given dates

const getDaysDifferent = (date1, date2) => {
    let oneday = 24 * 60 * 60 * 1000;
    // console.log(oneday);
    let diff = Math.abs(date1 - date2);
    // console.log(diff);
    return Math.floor(diff / oneday)
}

const date1 = new Date("2024-02-7")
const date2 = new Date("2024-03-29")
console.log(getDaysDifferent(date1,date2));


