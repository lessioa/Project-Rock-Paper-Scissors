let humanScore = 0;
let computerScore = 0;

function getComputerChoice(num) {   
    let randomNumber = Math.floor(Math.random() * num);
    if (randomNumber == 0) {
        randomNumber = "rock";
        return randomNumber;
    }
    if (randomNumber == 1) {
        randomNumber = "paper";
        return randomNumber;
    }
    if (randomNumber === 2) {
        randomNumber = "scissors";
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
        console.log("It's a tie! No one wins.");
        return computerScore;
    }
    
    if (humanChoice == "rock" && computerChoice == "paper") {
        console.log("Rock beats Paper. Computer Wins!");
        computerScore+= 1;
        return computerScore;
    }

    if (humanChoice == "rock" && computerChoice == "scissors") {
        console.log("Rock beats Scissors. Human Wins!");
        humanScore+= 1;
        return humanScore;
    }

    if (humanChoice == "paper" && computerChoice == "rock") {
        console.log("Paper beats Rock. Human Wins!");
        humanScore+= 1;
        return humanScore;
    }

    if (humanChoice == "paper" && computerChoice == "scissors") {
        console.log("Paper beats Scissors. Computer Wins!");
        computerScore+= 1;
        return computerScore;
    }

    if (humanChoice == "scissors" && computerChoice == "rock") {
        console.log("Scissors beats Rock. Computer Wins!");
        computerScore+= 1;
        return computerScore;
    }

    if (humanChoice == "scissors" && computerChoice == "paper") {
        console.log("Scissors beat Paper. Human Wins!");
        humanScore+= 1;
        return humanScore;
    }

}

function playGame() {
    const humanSelection1 = getHumanChoice();
    const computerSelection1 = getComputerChoice(3);
    const game1 = playRound(humanSelection1, computerSelection1);

    const humanSelection2 = getHumanChoice();
    const computerSelection2 = getComputerChoice(3);
    const game2 = playRound(humanSelection2, computerSelection2);

    const humanSelection3 = getHumanChoice();
    const computerSelection3 = getComputerChoice(3);
    const game3 = playRound(humanSelection3, computerSelection3);

    const humanSelection4 = getHumanChoice();
    const computerSelection4 = getComputerChoice(3);
    const game4 = playRound(humanSelection4, computerSelection4);

    const humanSelection5 = getHumanChoice();
    const computerSelection5 = getComputerChoice(3);
    const game5 = playRound(humanSelection5, computerSelection5);

    if (humanScore == computerScore) {
        console.log(`Playerscore: ${humanScore} --- Computer score: ${computerScore}. It's a tie!`);
    }

    if (humanScore > computerScore){  
        console.log(`Playerscore: ${humanScore} --- Computer score: ${computerScore}. You win!`);
    }

    if (computerScore > humanScore) {
        console.log(`Playerscore: ${humanScore} --- Computer score: ${computerScore}. Computer wins!`);
    }
}


playGame();

