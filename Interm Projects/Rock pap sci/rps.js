const choices = {
    rock: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjwLvDG1Zgl3hsxUzfSx-xmAPOjw2BpJ9N5Q&s",
    paper: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHQC1nVOx6Uld1XHqM0w1445TAcM87nxdlXg&s",
    scissors: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSds49E3wgAEWDvZpBkl-uof7jm_dOc_PX-yWYSo-Tgpm-n2QinRFMSj_WK9FWqCblNX1A&usqp=CAU"
};

const playerHand = document.getElementById("player-hand");
const botHand = document.getElementById("bot-hand");
const resultOutput = document.getElementById("result");
const botChoices = Object.keys(choices);

const playGame = (playerChoice) => {
    const botChoice = botChoices[Math.floor(Math.random() * 3)]

    playerHand.src = choices[playerChoice]
    botHand.src = choices[botChoice]

    let result;
    if(playerChoice === botChoice) {
        result = "IT'S A TIE!";
    } else if (
        (playerChoice === "rock" && botChoice === "scissors") || (playerChoice === "paper" && botChoice === "rock") || (playerChoice === "scissors" && botChoice === "paper")
    ) {
        result = "YOU WIN!";
    } else {
        result = "YOU LOSE!"
    }
    resultOutput.textContent = result;
}

document.getElementById("rock-btn").addEventListener("click", () => playGame("rock"));
document.getElementById("paper-btn").addEventListener("click", () => playGame("paper"));
document.getElementById("scissors-btn").addEventListener("click", () => playGame("scissors"));




























// const choices = {
//     rock: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjwLvDG1Zgl3hsxUzfSx-xmAPOjw2BpJ9N5Q&s",
//     paper: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHQC1nVOx6Uld1XHqM0w1445TAcM87nxdlXg&s",
//     scissors: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSds49E3wgAEWDvZpBkl-uof7jm_dOc_PX-yWYSo-Tgpm-n2QinRFMSj_WK9FWqCblNX1A&usqp=CAU"
// };

// const playerHand = document.getElementById("player-hand");
// const computerHand = document.getElementById("computer-hand");
// const resultText = document.getElementById("result");

// function playGame(playerChoice) {
//     const computerChoices = Object.keys(choices);
//     const computerChoice = computerChoices[Math.floor(Math.random() * computerChoices.length)];

//     // Shake animation before result
//     playerHand.classList.add("shake");
//     computerHand.classList.add("shake");

//     setTimeout(() => {
//         playerHand.classList.remove("shake");
//         computerHand.classList.remove("shake");

//         // Change images based on choices
//         playerHand.src = choices[playerChoice];
//         computerHand.src = choices[computerChoice];

//         // Determine winner
//         let result;
//         if (playerChoice === computerChoice) {
//             result = "It's a Tie!";
//         } else if (
//             (playerChoice === "rock" && computerChoice === "scissors") || (playerChoice === "paper" && computerChoice === "rock") || (playerChoice === "scissors" && computerChoice === "paper")
//         ) {
//             result = "You Win!";
//         } else {
//             result = "You Lose!";
//         }

//         resultText.textContent = result;
//     }, 1000); // Wait for 1 second before revealing
// }