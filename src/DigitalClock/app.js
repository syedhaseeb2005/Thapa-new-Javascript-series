const time = document.querySelector('#clock')
let currentTime = () =>{
    let curTime = new Date();
    time.innerText = curTime.toLocaleTimeString()
}
currentTime()
setInterval(currentTime, 1000)