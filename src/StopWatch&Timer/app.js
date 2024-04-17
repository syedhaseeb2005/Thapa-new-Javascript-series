const countDown = document.querySelector('#countdown')
const rest_value = document.querySelector('.reset_value')
const start_btn = document.querySelector('.start_btn')
const reset_btn = document.querySelector('.reset_btn')
const stop_btn = document.querySelector('.stop_btn')
const getime_btn = document.querySelector('.getime_btn')
const cleartime_btn = document.querySelector('.cleartime_btn')

let startcount = 0;
let intervalId;

const startHandler = () => {
    intervalId = setInterval(() => countDown.innerText = startcount++, 1000)

}
const stopHandler = () => {
    getTimeHandler()
    clearInterval(intervalId)
}
const restHandler = () => {
    startcount = 0;
    countDown.innerText = startcount;
    clearInterval(intervalId);
}
const getTimeHandler = () => {
    const newPara = document.createElement('p');
    newPara.innerText = `The Stop Time is: ${startcount}`
    rest_value.appendChild(newPara); 
};
const clearTimeHanlder = () =>{
    rest_value.innerText = ''
}


start_btn.addEventListener('click', startHandler);
reset_btn.addEventListener('click', restHandler);
stop_btn.addEventListener('click', stopHandler);
getime_btn.addEventListener('click',  getTimeHandler);
cleartime_btn.addEventListener('click',  clearTimeHanlder);