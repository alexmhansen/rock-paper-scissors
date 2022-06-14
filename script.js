let playerWin = parseInt(0);
let computerWin = parseInt(0);
let gameCount = 0;
let win = 'Won!'
let lose = 'Lost!'
let tie = 'Tie!'

const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');

// Div containing match result
const body = document.body
const div = document.createElement('div');
body.append(div);
div.setAttribute('id', 'container');
const container = document.getElementById('container');

// Div containing running score


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

// Plays for the user

btn1.addEventListener('click', () => {
    let playerSelection = 'ROCK';
    let computerSelection = computerPlay();
    let rock = playRound(playerSelection, computerSelection);
    div.textContent = rock
})

btn2.addEventListener('click', () => {
    let playerSelection = 'PAPER';
    let computerSelection = computerPlay();
    let paper = playRound(playerSelection, computerSelection);
    div.textContent = paper
})

btn3.addEventListener('click', () => {
    let playerSelection = 'SCISSORS';
    let computerSelection = computerPlay();
    let scissors = playRound(playerSelection, computerSelection);
    div.textContent = scissors
})

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