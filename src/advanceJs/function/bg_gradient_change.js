var btn1 = document.querySelector("#mybutton")
var btn2 = document.querySelector("#mybutton2")
var copyCode = document.querySelector(".copyCode");

const hexValue = () => {
    let myHexValue = '0123456789abcdef'
    let color = "#"
    for (let i = 0; i < 6; i++) {
        color = color + myHexValue[Math.floor(Math.random() * 16)];
    }
    return color
}

const handlebtn1 = () => {
    rgb1 = hexValue()
    rgb2 = hexValue()
    btn1.innerHTML = rgb1
    document.body.style.backgroundImage = `linear-gradient(to right,${rgb1},#444)`;
    copyCode.innerHTML = `background-image: linear-gradient(to right, ${rgb1},${rgb2});`
}
const handlebtn2 = () => {
    rgb1 = hexValue()
    rgb2 = hexValue()
    btn2.innerHTML = rgb2
    document.body.style.backgroundImage = `linear-gradient(to right,${rgb1},${rgb2})`;
    copyCode.innerHTML = `background-image: linear-gradient(to right, ${rgb1},${rgb2});`
}
copyCode.addEventListener("click", () => {
    navigator.clipboard.writeText(copyCode.innerHTML)
})
btn1.addEventListener("click", handlebtn1)
btn2.addEventListener("click", handlebtn2)