let humanScore = 0;
let computerScore = 0;

function getComputerChoice(num) {   
    let randomNumber = Math.floor(Math.random() * num);
    if (randomNumber == 0) {
        randomNumber = "Rock";
        return randomNumber;
    }
    if (randomNumber == 1) {
        randomNumber = "Paper";
        return randomNumber;
    }
    if (randomNumber === 2) {
        randomNumber = "Scissors";
        return randomNumber;
    }
}

function getHumanChoice() {
    let userChoice = prompt("Rock, Paper or Scissors?");
    return userChoice;
}

console.log(getHumanChoice());