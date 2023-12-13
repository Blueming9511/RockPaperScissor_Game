// Define getRandomInt function
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Define getComputerChoice function
function getComputerChoice() {
    let computerChoice = getRandomInt(1, 3);
    if (computerChoice == 1) return "rock";
    else if (computerChoice == 2) return "paper";
    else return "scissors";
}

// Define playRound function
function playRound(playerSelection, computerChoice) {
    switch (playerSelection) {
        case "rock":
            if (computerChoice === 'paper') {
                return "lose";
            } else if (computerChoice === 'scissors') {
                return "win";
            } else {
                return "draw";
            }
        case "paper":
            if (computerChoice === 'rock') {
                return "win";
            } else if (computerChoice === 'scissors') {
                return "lose";
            } else {
                return "draw";
            }
        case "scissors":
            if (computerChoice === 'rock') {
                return "lose";
            } else if (computerChoice === 'paper') {
                return "win";
            } else {
                return "draw";
            }
        default:
            return "invalid selection"; // Handle invalid input
    }
}

const gameButtons = document.querySelectorAll(".game-button")

gameButtons.forEach(button => {
    button.addEventListener("click", function (){
        const userChoice = button.getAttribute('data-choice');
        const computerChoice = getComputerChoice();
        const result = playRound(userChoice, computerChoice);
        alert(result);
    });
});