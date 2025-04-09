const randombtn = document.getElementById("randomNum");
const rollbtn = document.getElementById("rollNum");
let displaybar = document.getElementById("displaybar");
let displayroll = document.getElementById("rollDisplay");

randombtn.addEventListener("click", () => {
   let randomNumber = Math.floor(Math.random() * 100);
   displaybar.value = randomNumber; //we will never use textContent with <input> or <textarea>. always use .value with these
})



let min = 1;
let max = 6;
rollbtn.addEventListener("click", () => {
    let diceNum = Math.floor(Math.random() * (max - min) + min);
    rollDisplay.textContent = diceNum;
})

// I made this on my own :)