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
    userChoice = userChoice.toLowerCase();
    return userChoice;
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice == computerChoice) {
        console.log("It's a tie! No one wins.")
    }
    
    if (humanChoice == "rock" && computerChoice == "Paper") {
        console.log("Rock beats Paper. Computer Wins!");
        return computerScore++;
    }

    if (humanChoice == "rock" && computerChoice == "Scissors") {
        console.log("Rock beats Scissors. Human Wins!");
        return humanScore++;
    }

    if (humanChoice == "paper" && computerChoice == "Rock") {
        console.log("Paper beats Rock. Human Wins!");
        return humanScore++;
    }

    if (humanChoice == "paper" && computerChoice == "Scissors") {
        console.log("Paper beats Scissors. Computer Wins!");
        return computerScore++;
    }

    if (humanChoice == "scissors" && computerChoice == "Rock") {
        console.log("Scissors beats Rock. Computer Wins!");
        return computerScore++;
    }

    if (humanChoice == "scissors" && computerChoice == "Paper") {
        console.log("Scissors beat Paper. Human Wins!");
        return humanScore++;
    }
}

function playGame() {
    
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice(3);

playRound(humanSelection, computerSelection);