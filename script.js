function getComputerChoice() {
    // Math.random(): This function generates a random floating-point number between 0 (inclusive) and 1 (exclusive). (Could be 0.000001, 1.234567, 2.999999, or etc.) It does not accept any arguments. By multiplying the result of Math.random() by 3, we get a random floating-point number between 0 (inclusive) and 3 (exclusive). The generated number can be any decimal value in that range.
    let randomChoice = Math.floor(Math.random() * 3) + 1;

    if (randomChoice === 1){
        return 'Rock';
    }
    else if (randomChoice === 2){
        return 'Paper';
    }
    else {
        return 'Scissors';
    }
}

// console.log(getComputerChoice());