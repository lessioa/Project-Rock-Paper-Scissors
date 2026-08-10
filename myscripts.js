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

console.log(getComputerChoice(3));