// Function to randomly get a computer choice for the game
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

// Playing one round of rock paper scissors with the computer
function playRound(playerSelection) {
    // your code here!

    const computerSelection = getComputerChoice();
    let roundResult;

    // Ties
    if (playerSelection === computerSelection){
        // return "It's a tie!";
        roundResult = "It's a tie!";
    }
    // Player Wins
    else if ((playerSelection === 'rock' && computerSelection === 'scissors') || 
    (playerSelection === 'scissors' && computerSelection === 'paper') || 
    (playerSelection === 'paper' && computerSelection === 'rock')){
        // return "You Win! " + (playerSelection[0].toUpperCase() + playerSelection.slice(1)) + " beats " + (computerSelection[0].toUpperCase() + computerSelection.slice(1));

        roundResult = "You Win! " + (playerSelection[0].toUpperCase() + playerSelection.slice(1)) + " beats " + (computerSelection[0].toUpperCase() + computerSelection.slice(1));
        playerScore++;
    }
    // Player Loses
    else {
        // return "You Lose! " + (computerSelection[0].toUpperCase() + computerSelection.slice(1)) + " beats " + (playerSelection[0].toUpperCase() + playerSelection.slice(1));

        roundResult = "You Lose! " + (computerSelection[0].toUpperCase() + computerSelection.slice(1)) + " beats " + (playerSelection[0].toUpperCase() + playerSelection.slice(1));
        computerScore++;
    }
    
    // Text of round result
    result.textContent = roundResult;

    // Update scores
    score.textContent = `Player: ${playerScore} - Computer: ${computerScore}`;

    // Check if game has ended
    checkGameEnd();
}

// function game() {
//     let playerScore = 0;
//     let computerScore = 0;

//     while (playerScore < 3 && computerScore < 3){
//         let playerSelection = prompt("Choose: rock, paper, or scissors").toLowerCase();
        
//         // Player input check
//         if (playerSelection !== 'rock' && playerSelection !== 'paper' && playerSelection !== 'scissors') {
//             while (playerSelection !== 'rock' && playerSelection !== 'paper' && playerSelection !== 'scissors'){
//                 playerSelection = prompt("Choose: rock, paper, or scissors").toLowerCase();
//             }
//         }

//         const computerSelection = getComputerChoice();

//         let round = playRound(playerSelection, computerSelection);

//         console.log(round);

//         if (round.slice(4,8) === 'Lose'){
//             computerScore++;
//         }
//         else if (round.slice(4,7) === 'Win'){
//             playerScore++;
//         }
//     }

//     if (playerScore > computerScore){
//         return "You Win! Score: " + playerScore + " - " + computerScore;
//     }
//     else {
//         return "You Lose! Score: " + playerScore + " - " + computerScore;
//     }
// }

// const result = game();
// console.log(result);

// Violates DRY principle, but this is a small project
function checkGameEnd() {
    if (playerScore >= 5) {
        result.textContent = `Player won! Game over.`;
        rockButton.disabled = true;
        paperButton.disabled = true;
        scissorsButton.disabled = true;
    } else if (computerScore >= 5) {
        result.textContent = `Computer won! Game over.`;
        rockButton.disabled = true;
        paperButton.disabled = true;
        scissorsButton.disabled = true;
    }
}

// Initial scores of player and computer
let playerScore = 0;
let computerScore = 0;

const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");

const result = document.querySelector("#result");
const score = document.querySelector("#score");

rockButton.addEventListener("click", () => {
    playRound("rock"); // Call the playRound function with the correct playerSelection
  });
  
paperButton.addEventListener("click", () => {
    playRound("paper"); // Call the playRound function with the correct playerSelection
  });
  
scissorsButton.addEventListener("click", () => {
    playRound("scissors"); // Call the playRound function with the correct playerSelection
  });