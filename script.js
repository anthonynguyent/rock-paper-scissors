function getComputerChoice() {
    // Math.random(): This function generates a random floating-point number between 0 (inclusive) and 1 (exclusive). (Could be 0.000001, 1.234567, 2.999999, or etc.) It does not accept any arguments. By multiplying the result of Math.random() by 3, we get a random floating-point number between 0 (inclusive) and 3 (exclusive). The generated number can be any decimal value in that range.
    const randomChoice = Math.floor(Math.random() * 3) + 1;

    if (randomChoice === 1){
        return 'rock';
    }
    else if (randomChoice === 2){
        return 'paper';
    }
    else {
        return 'scissors';
    }
}

function playRound(playerSelection, computerSelection) {
    // your code here!

    // Ties
    if (playerSelection === computerSelection){
        return "It's a tie!";
    }
    // Player Wins
    else if ((playerSelection === 'rock' && computerSelection === 'scissors') || 
    (playerSelection === 'scissors' && computerSelection === 'paper') || 
    (playerSelection === 'paper' && computerSelection === 'rock')){
        return "You Win! " + (playerSelection[0].toUpperCase() + playerSelection.slice(1)) + " beats " + (computerSelection[0].toUpperCase() + computerSelection.slice(1));
    }
    // Player Loses
    else {
        return "You Lose! " + (computerSelection[0].toUpperCase() + computerSelection.slice(1)) + " beats " + (playerSelection[0].toUpperCase() + playerSelection.slice(1));
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;

    while (playerScore < 3 && computerScore < 3){
        let playerSelection = prompt("Choose: rock, paper, or scissors").toLowerCase();
        
        // Player input check
        // while (playerSelection !== 'rock' || playerSelection !== 'paper' || playerSelection !== 'scissors') {
        //     playerSelection = prompt("Choose: rock, paper, or scissors").toLowerCase();
        // }

        const computerSelection = getComputerChoice();

        let round = playRound(playerSelection, computerSelection);

        console.log(round);

        if (round.slice(4,8) === 'Lose'){
            computerScore++;
        }
        else if (round.slice(4,7) === 'Win'){
            playerScore++;
        }
    }

    if (playerScore > computerScore){
        return "You Win!";
    }
    else {
        return "You Lose!";
    }
}

const result = game();

console.log(result);