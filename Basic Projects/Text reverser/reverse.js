const input = document.getElementById("inputBox");
const btn = document.getElementById("button");
const displayText = document.getElementById("display");

btn.addEventListener("click", () => {
    let userText = input.value;
    let reverseText = userText.split('').reverse().join('');
    displayText.textContent = reverseText;
});