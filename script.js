let playerScore = parseInt(0);
let computerScore = parseInt(0);
let gameCount = parseInt(0);
let win = 'Won!';
let lose = 'Lost!';
let tie = 'Tie!';

const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');

// Div containing match result
const container = document.getElementById('container');

const div = document.createElement('div');
container.append(div);
div.setAttribute('id', 'status');

// Div containing running score
const div1 = document.createElement('div');
container.append(div1);
div1.setAttribute('id', 'score');
// const score = document.getElementById('score');
div1.innerText = gameCount;

// Plays one round
function playRound(playerSelection, computerSelection) {
    gameCount++;
    // Compare to ROCK
    if (playerSelection === 'ROCK') {
        if (computerSelection === 'PAPER') {
            computerScore++;
            return lose;
        } else if (computerSelection === 'SCISSORS') {
            playerScore++;
            return win;
        } else {
            return tie;
        }
    };

    // Compare to PAPAER
    if (playerSelection === 'PAPER') {
        if (computerSelection === 'ROCK') {
            playerScore++;
            return win;
        } else if (computerSelection === 'SCISSORS') {
            computerScore++;
            return lose;
        } else {
            return tie;
        }
    };

    // Compare to SCISSORS
    if (playerSelection === 'SCISSORS') {
        if (computerSelection === 'ROCK'){
            computerScore++;
            return lose;
        } else if (computerSelection === 'PAPER') {
            playerScore++;
            return win;
        } else {
            return tie;
        }
    };
};

// Plays for the user
btn1.addEventListener('click', () => {
    let playerSelection = 'ROCK';
    let computerSelection = computerPlay();
    let rock = playRound(playerSelection, computerSelection);
    div.textContent = rock;
    div1.textContent = gameCount;
});

btn2.addEventListener('click', () => {
    let playerSelection = 'PAPER';
    let computerSelection = computerPlay();
    let paper = playRound(playerSelection, computerSelection);
    div.textContent = paper;
    div1.textContent = gameCount;
});

btn3.addEventListener('click', () => {
    let playerSelection = 'SCISSORS';
    let computerSelection = computerPlay();
    let scissors = playRound(playerSelection, computerSelection);
    div.textContent = scissors;
    div1.textContent = gameCount;
});

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
    };
};