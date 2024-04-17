const btn_1 = document.querySelector('.btn_1')
const btn_2 = document.querySelector('.btn_2')
const btn_3 = document.querySelector('.btn_3')
// console.log(btn_1);
// console.log(btn_2);
// console.log(btn_3);


const studentData = {
    name : "Syed Haseeb",
    class : "BSCS",
    age : "18",
    course : ['Web Development', 'Ms Office','Math'],
    address : {
        city : "Karachi",
        country : "Pakistan",
        state : "Sindh"
    }
}

const handleAddItem = () => {
    localStorage.setItem('student', JSON.stringify(studentData))
}
const handleGetItem = () => {
    const student = JSON.parse(localStorage.getItem('student'))
    console.log(student);
}

const handleRemoveItem = () => {
    localStorage.removeItem('student')
}

btn_1.addEventListener('click', handleAddItem)
btn_2.addEventListener('click', handleGetItem)
btn_3.addEventListener('click', handleRemoveItem)