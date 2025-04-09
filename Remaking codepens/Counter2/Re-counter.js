const increase = document.getElementById("increasebtn");
const decrease = document.getElementById("decreasebtn");
const reset = document.getElementById("resetbtn");
const displayarea = document.getElementById("counter");
let count = 0;


let inc = increase.addEventListener("click", () => {
    count++;
    displayarea.textContent = count;
});

let dec = decrease.addEventListener("click", () => {
    count--;
    displayarea.textContent = count;
});

let resets = reset.addEventListener("click", () => {
    count = 0;
    displayarea.textContent = count;
})