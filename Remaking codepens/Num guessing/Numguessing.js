const userinput = document.getElementById("input-field");
const button = document.getElementById("checkbtn");
const ptext = document.getElementById("textcheck");

let randomNum = Math.floor(Math.random() * 100);

button.addEventListener("click", () => {
    let input = userinput.value
    if(input == randomNum) {
        ptext.textContent = "You guessed correct!"
    } else if(input > randomNum) {
        ptext.textContent = "You guessed high..."
    } 
    if(input < randomNum) {
        ptext.textContent = "You guessed low..."
    }
})