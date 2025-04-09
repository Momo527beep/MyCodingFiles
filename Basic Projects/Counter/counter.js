const countbtn = document.getElementById("count");
const resetbtn = document.getElementById("reset");
const counter = document.getElementById("counter");
let count = 0; //count is just a var name

countbtn.addEventListener("click", () => {
    count++;
    counter.textContent = count;
});

resetbtn.addEventListener("click", () => {
    count = 0;
    counter.textContent = count;
})