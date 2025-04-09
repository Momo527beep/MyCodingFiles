const input = document.getElementById("userInput");
const displayArea = document.getElementById("displayCount");

input.addEventListener("keyup", () => {
    let inputField = input.value;
    let countArea = input.value.length;
    displayArea.textContent = countArea;
});