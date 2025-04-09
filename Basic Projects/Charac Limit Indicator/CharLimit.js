const inputfield = document.getElementById("input");
const displayArea = document.getElementById("display");
const maxLimit = inputfield.maxLength;

inputfield.addEventListener("input", () => {
    let userinput = inputfield.value.length;
    let remaining = maxLimit - userinput;
    displayArea.textContent = `Characters Left: ${remaining}`;
})