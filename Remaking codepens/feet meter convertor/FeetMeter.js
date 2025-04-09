const displayinput = document.getElementById("inputDisplay");
const tofeet = document.getElementById("feet");
const tometer = document.getElementById("meter");
const displayresult = document.getElementById("resultDisplay");

tofeet.addEventListener("click", () => {
    input = displayinput.value;
    let convert = (input / 3.281).toFixed(3) + ' Meter';
    displayresult.value = convert;
})

tometer.addEventListener("click", () => {
    input = displayinput.value;
    let convert = (input * 3.281).toFixed(3) + " Feet";
    displayresult.value = convert;
})