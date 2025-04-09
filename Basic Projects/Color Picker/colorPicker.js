const color = document.getElementById("color");
const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
    document.body.style.background = color.value;
})