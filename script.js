// User inputs a choice, either: “rock”, “paper” or “scissor”
const playerInput = document.querySelectorAll('.select');
const playerSelectionDisplay = document.querySelector('.player-selection');
const computerSelectionDisplay = document.querySelector('.computer-selection');
const resultsDisplay = document.querySelector('.results')

function displaySelection(playerInput) {
  playerSelectionDisplay.textContent = '';
  const img = document.createElement('img');
  img.setAttribute("src",`${playerInput[0]}`);
  img.setAttribute("src",`${playerInput[0]}`);
  playerSelectionDisplay.appendChild(img);
}

function displayComputerSelection(computerInput) {
  computerSelectionDisplay.textContent = '';
  const img = document.createElement('img');
  if(computerInput === "rock") {
    img.setAttribute("src","img/fist.png");
    img.setAttribute("alt", "Rock");
  }
  else if(computerInput === "paper") {
    img.setAttribute("src", "img/open-hand (1).png");
    img.setAttribute("alt", "Paper")
  }
  else {
    img.setAttribute("src", "img/scissors (1).png")
    img.setAttribute("alt", "Scissor")
  }
  computerSelectionDisplay.appendChild(img);
}

function getUserPlay(event) {
  const selectionImg = event.target.getAttribute('src');
  const selectionAlt = event.target.getAttribute('alt').toLowerCase();
  return [selectionImg, selectionAlt]
}

playerInput.forEach((item) => {
  item.addEventListener('click', (event) => {
    let userPlay = getUserPlay(event);
    let computerPlay = getComputerPlay();
    displaySelection(userPlay);
    displayComputerSelection(computerPlay);
    playRound(userPlay, computerPlay);
  })
})


// Computer inputs a random choice, either “rock”, “paper” or “scissor”

function getComputerPlay() {
  const gameValues = ['rock', 'paper', 'scissor'];
  const randomInput = gameValues[getRandom(0, gameValues.length)];
  return randomInput;
}
// generates a random number between two defined numbers
function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min) + min)
}

// Stores the game scores
let playerScore = document.querySelector('.player-score');
let computerScore = document.querySelector('.machine-score');

playerScore.textContent = 0;
computerScore.textContent = 0;


// Compare the User and Computer inputs and output a result
function playRound(playerSelection, computerSelection) {
  if(playerSelection[1] === computerSelection) {
    resultsDisplay.textContent = "It's a tie";
    return 'tie';
  }
  else if(playerSelection[1] === 'rock' && computerSelection === 'scissor') {
    resultsDisplay.textContent = "You won! Rock beats Scissor";
    return ++playerScore.textContent
  }
  else if(playerSelection[1] === 'rock' && computerSelection === 'paper') {
    resultsDisplay.textContent = "You lose! Paper beats Rock";
    return ++computerScore.textContent
  }
  else if(playerSelection[1] === 'scissor' && computerSelection === 'paper') {
    resultsDisplay.textContent = "You won! Scissor beats Paper";
    return ++playerScore.textContent
  }
  else if(playerSelection[1] === 'scissor' && computerSelection === 'rock') {
    resultsDisplay.textContent = "You lose! Rock beats Scissor";
    return ++computerScore.textContent
  }
  else if(playerSelection[1] === 'paper' && computerSelection === 'rock') {
    resultsDisplay.textContent = "You won! Paper beats Rock";
    return ++playerScore.textContent
  }
  else if(playerSelection[1] === 'paper' && computerSelection === 'scissor') {
    resultsDisplay.textContent =  "You lose! Scissor beats Paper";
    return ++computerScore.textContent
  }
}

// Compare the User and the Computer Scores and return the winner
function defineWinner(pScore, cScore) {
  if(pScore > cScore) {
    return console.log("You are the Champion! Congratulations!")
  } else {
    return console.log("The Machine Won! More luck next time")
  }
}

// Initialization function
function playGame() {
  for(let round = 1; round <= 5; round++) {
    console.log(`Round: ${round}`);
    if(playRound(getUserPlay(), getComputerPlay()) === 'tie') {
      round -= 1;
    };
    console.log(`Player Score: ${playerScore} | Machine Score: ${computerScore}`);
  }
  defineWinner(playerScore, computerScore);
}

function playerInfo() {
  const div = document.createElement('div');
  
}
