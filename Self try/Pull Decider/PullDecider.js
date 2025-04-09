const primobox = document.getElementById("primo");
const pitybox = document.getElementById("pity");
const result = document.getElementById("resultfinal");
const button = document.getElementById("btn");
const textarea = document.getElementById("text");

button.addEventListener("click", () => {
    let primos = Number(primobox.value); //NEW: when u retrieve values from input box, they are always treated as strings so you must convert string to num even if the input type is a number
    let pitys = Number(pitybox.value);

    let totalwishes = Math.floor(primos / 160) + pitys;
    result.value = totalwishes

    if(totalwishes <= 100) {
        textarea.textContent = "Wait for rerun, traveller!";
    } else if(totalwishes <= 120) {
        textarea.textContent = "Maybe you should wait a little...";
    } else {
        textarea.textContent = "Go for it traveller!!";
    }
})

