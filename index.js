/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const inputEl = document.getElementById("input-el")
const lengthP = document.getElementById("LengthP")
const convertBtn = document.getElementById("convert-Btn")

convertBtn.addEventListener("click",function(){

    if(inputEl.value){
    calculate()
    } else {
        console.log("Enter a number")
    }
})

function calculate() {
    let input = 0;

    input = Number(inputEl.value)


    let metersToFeet = Number(input * 3.281).toFixed(3)
    let feetToMeters = Number(input * 0.3048).toFixed(3)

    lengthP.innerHTML = `${input} meters = ${feetToMeters} | ${input} feet = ${feetToMeters}`
}

