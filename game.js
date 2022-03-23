 //setting up score counters
    let playerScore = 0;
    let computerScore = 0;


//returns random string of 'Rock', 'Paper', 'Scissors'
function computerPlay() { 
    //set up available options
    const options = ['Rock', 'Paper', 'Scissors'];

    //get random index value from array
    const randomIndex = Math.floor(Math.random() * options.length);

    //return random strig from array
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

};

function game() {

    // for (let i = 0; i < 5; i++) {
    //     let playerSelection =  prompt("Choose your play: Rock, Paper, or Scissors?");
    //     playRound(playerSelection);
    //     console.log(`Current player score: ${playerScore}`);
    //     console.log(`Current computer score ${computerScore}`);
    // }
    if (playerScore >= computerScore) {
        return "Winner Winner! Chicken dinner!"
    } else {
        return "Computer wins. Better luck next time!"
    }
};

//button variables and their event listeners for playerSelection
const rockButton = document.querySelector('#rock');
rockButton.addEventListener('click', () => {
    playRound("ROCK");
})

const scissorsButton = document.querySelector('#scissors');
scissorsButton.addEventListener('click', () => {
    playRound("SCISSORS");
})

const paperButton = document.querySelector('#paper');
paperButton.addEventListener('click', () => {
    playRound("PAPER");
})

const resultsContainer = document.querySelector('.results');

const playerScoreboard = document.querySelector('.player-score');

const computerScoreboard = document.querySelector('.computer-score');

