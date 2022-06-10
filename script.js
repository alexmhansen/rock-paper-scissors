// Plays for the computer
function computerPlay() {
    // Generates random number that correlates with a response
    let num = Math.floor(Math.random() * 3);

    if (num === 0) {
        return 'ROCK';
    } else if (num === 1) {
        return 'PAPER';
    } else {
        return 'SCISSORS';
    }
}

// Plays one round
function playRound(playerSelection, computerSelection) {

    // Compare to ROCK
    if (playerSelection === 'ROCK') {
        if (computerSelection === 'PAPER') {
            computerWin++;
            return lose;
        } else if (computerSelection === 'SCISSORS') {
            playerWin++;
            return win;
        } else {
            return tie;
        }
    }

    // Compare to PAPAER
    if (playerSelection === 'PAPER') {
        if (computerSelection === 'ROCK') {
            playerWin++;
            return win;
        } else if (computerSelection === 'SCISSORS') {
            computerWin++;
            return lose;
        } else {
            return tie;
        }
    }

    // Compare to SCISSORS
    if (playerSelection === 'SCISSORS') {
        if (computerSelection === 'ROCK'){
            computerWin++;
            return lose;
        } else if (computerSelection === 'PAPER') {
            playerWin++;
            return win;
        } else {
            return tie;
        }
    }
}

// Runs a best of 5 scenario, and determines the winner
function game() {
    gameCount++;
    // if (gameCount <= 5) {
    //     let playerSelection = prompt('Rock, Paper, or Scissors?').toUpperCase();
    //     let computerSelection = computerPlay();
    //     playRound();
    //     console.log(playRound(playerSelection, computerSelection));
    //     console.log('Your score: ' + playerWin);
    //     console.log('Computer\'s Score: ' + computerWin);
    // } else {
    //     console.log('Game over!')
    //     console.log('Your score: ' + playerWin);
    //     console.log('Computer\'s Score: ' + computerWin);
    // }
}

let playerWin = parseInt(0);
let computerWin = parseInt(0);
let gameCount = 0;
let win = 'Won!'
let lose = 'Lost!'
let tie = 'Tie!'

