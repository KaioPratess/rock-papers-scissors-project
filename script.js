// Get player input
const playerInput = document.querySelectorAll('.select');

function getPlayerPlay(event) {
  const selectionImg = event.target.getAttribute('src');
  const selectionAlt = event.target.getAttribute('alt').toLowerCase();
  return [selectionImg, selectionAlt]
}

// Display player input
const playerSelectionDisplay = document.querySelector('.player-selection');

function displayPlayerSelection(playerInput) {
  playerSelectionDisplay.textContent = '';
  const img = document.createElement('img');
  img.setAttribute("src",`${playerInput[0]}`);
  img.setAttribute("src",`${playerInput[0]}`);
  playerSelectionDisplay.appendChild(img);
}  

// Get computer input
function getComputerPlay() {
  const gameValues = ['rock', 'paper', 'scissor'];
  const randomInput = gameValues[getRandom(0, gameValues.length)];
  return randomInput;
}  

// generates a random number between two defined numbers
function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min) + min)
}  

// Display computer input
const computerSelectionDisplay = document.querySelector('.computer-selection');

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

// Store the game scores
let playerScore = document.querySelector('.player-score');
let computerScore = document.querySelector('.machine-score');

playerScore.textContent = 0;
computerScore.textContent = 0;

// Compare the player and Computer inputs and output a result
const resultsDisplay = document.querySelector('.results');
const quickWinAudio = document.querySelector('.quick-win-audio');
const quickLoseAudio = document.querySelector('.quick-lose-audio');
const tieAudio = document.querySelector('.tie-audio')

function playRound(playerSelection, computerSelection) {
  if(playerSelection[1] === computerSelection) {
    resultsDisplay.textContent = "It's a tie";
    tieAudio.currentTime = 0;
    tieAudio.play();
    return 'tie';
  }  
  else if(playerSelection[1] === 'rock' && computerSelection === 'scissor') {
    resultsDisplay.textContent = "You won! Rock beats Scissor";
    quickWinAudio.currentTime = 0;
    quickWinAudio.play();
    return ++playerScore.textContent
  }  
  else if(playerSelection[1] === 'rock' && computerSelection === 'paper') {
    resultsDisplay.textContent = "You lose! Paper beats Rock";
    quickLoseAudio.currentTime = 0;
    quickLoseAudio.play();
    return ++computerScore.textContent
  }  
  else if(playerSelection[1] === 'scissor' && computerSelection === 'paper') {
    resultsDisplay.textContent = "You won! Scissor beats Paper";
    quickWinAudio.currentTime = 0;
    quickWinAudio.play();
    return ++playerScore.textContent
  }  
  else if(playerSelection[1] === 'scissor' && computerSelection === 'rock') {
    resultsDisplay.textContent = "You lose! Rock beats Scissor";
    quickLoseAudio.currentTime = 0;
    quickLoseAudio.play();
    return ++computerScore.textContent
  }  
  else if(playerSelection[1] === 'paper' && computerSelection === 'rock') {
    resultsDisplay.textContent = "You won! Paper beats Rock";
    quickWinAudio.currentTime = 0;
    quickWinAudio.play();
    return ++playerScore.textContent
  }  
  else if(playerSelection[1] === 'paper' && computerSelection === 'scissor') {
    resultsDisplay.textContent =  "You lose! Scissor beats Paper";
    quickLoseAudio.currentTime = 0;
    quickLoseAudio.play();
    return ++computerScore.textContent
  }  
}  

// Compare the player and the Computer Scores and return the winner
const winnerDisplay = document.querySelector('.winner-bg');
const loserDisplay = document.querySelector('.loser-bg');
const winnerAudio = document.querySelector('.win-audio');
const gameOverAudio = document.querySelector('.game-over-audio')

function defineWinner(pScore, cScore) {
  if(pScore > cScore) {
    winnerDisplay.style.display = 'flex';
    winnerAudio.play();
  } else {
    loserDisplay.style.display = 'flex';
    gameOverAudio.play();
  }  
}  

// Get player name and display it
const playerName = document.querySelector('.player-name');
const nameInput = document.querySelector('#name');

function setPlayerName(event) {
  playerName.textContent = event.target.value;
}

nameInput.addEventListener('change', setPlayerName);

// Get player genre and change icon
const playerImg = document.querySelector('.player-img');
const playerGenre = document.querySelector('#genre');

function setPlayerImg(select) {
  const img = document.createElement('img');
  if (select === 'boy') {
    img.setAttribute("src", "img/boy.png");
  } else {
    img.setAttribute("src", "img/girl.png")
  }
  img.setAttribute("alt", "player");
  playerImg.appendChild(img);
}

console.log(playerGenre )


// Start and Restart game
const startBtn = document.querySelector('.start-btn');
const restartBtn = document.querySelectorAll('.restart-btn');
const initialScreen = document.querySelector('.info-bg');

function startGame() {
  const select = playerGenre.options[playerGenre.selectedIndex].value;
  setPlayerImg(select);
  initialScreen.style.display = 'none';
}

function restartGame () {
  winnerDisplay.style.display = 'none';
  loserDisplay.style.display = 'none';
  resultsDisplay.textContent = '';
  roundNumber.textContent = 1;
  playerScore.textContent = 0;
  computerScore.textContent = 0;
  playerSelectionDisplay.textContent = 'Start Playing';
  computerSelectionDisplay.textContent = 'Start Playing';
}

startBtn.addEventListener('click', startGame);
restartBtn.forEach((item) => {
  item.addEventListener('click', restartGame);
})

// Play Game
const roundNumber = document.querySelector('.round-n');

playerInput.forEach((item) => {
  item.addEventListener('click', (event) => {
    if(roundNumber.textContent <= 5) {
      let playerPlay = getPlayerPlay(event);
      displayPlayerSelection(playerPlay);
      let computerPlay = getComputerPlay();
      displayComputerSelection(computerPlay);
      if (playRound(playerPlay, computerPlay) === 'tie') {
        roundNumber.textContent--
      }
      roundNumber.textContent++;
      console.log(roundNumber.textContent)
      if (roundNumber.textContent == 6) {
          defineWinner(playerScore.textContent, computerScore.textContent);
        }
      }
  })});
  