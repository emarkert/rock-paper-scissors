 //setting up score counters
let playerScore = 0;
let computerScore = 0;

//DOM selectors
const resultsContainer = document.querySelector('.results');

const playerScoreboard = document.querySelector('.player-score');

const computerScoreboard = document.querySelector('.computer-score');


//button variables and their event listeners for playerSelection
const rockButton = document.querySelector('#rock');
rockButton.addEventListener('click', () => {
    playRound("ROCK");
});

const scissorsButton = document.querySelector('#scissors');
scissorsButton.addEventListener('click', () => {
    playRound("SCISSORS");
});

const paperButton = document.querySelector('#paper');
paperButton.addEventListener('click', () => {
    playRound("PAPER");
});



//returns random string of 'Rock', 'Paper', 'Scissors'
function computerPlay() { 

    const options = ['Rock', 'Paper', 'Scissors'];

    //get random index value from array
    const randomIndex = Math.floor(Math.random() * options.length);

    //return random string from array
    const selection = options[randomIndex];
    return selection;
};

function playRound(playerSelection) {

    //retrieve the computer's play
    let computerSelection = computerPlay().toUpperCase();

    //standardize playerSelection input to account for mixed case inputs
    let playerMove = playerSelection.toUpperCase();

    //compare computer and player selections with if/else statements
    if (playerMove == 'ROCK' && computerSelection == 'PAPER') {
        computerScore++;
        resultsContainer.textContent = `Computer wins!`
    } else if (playerMove == 'ROCK' && computerSelection == 'SCISSORS') {
        playerScore++;
        resultsContainer.textContent = `Player wins!`
    } else if (playerMove == 'PAPER' && computerSelection == 'SCISSORS') {
        computerScore++;
        resultsContainer.textContent = `Computer wins!`
    } else if (playerMove == 'PAPER' && computerSelection == 'ROCK') {
        playerScore++
        resultsContainer.textContent = `Player wins!`
    } else if (playerMove == 'SCISSORS' && computerSelection == 'ROCK') {
        computerScore++;
        resultsContainer.textContent = `Computer wins!`
    } else if (playerMove == 'SCISSORS' && computerSelection == 'PAPER') {
        playerScore++
        resultsContainer.textContent = `Player wins!`
    } else {
        resultsContainer.textContent = "Draw! Try again!";
    };

    playerScoreboard.textContent = `${playerScore}`;
    computerScoreboard.textContent = `${computerScore}`
    findWinner();

};

function findWinner() {
    if (playerScore === 5 && computerScore < 5) {
        resultsContainer.textContent = "Winner Winner Chicken Dinner!";
    } else if (computerScore === 5 && playerScore < 5) {
        resultsContainer.textContent = "Computer Wins. Better luck next time.";
    };
};