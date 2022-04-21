// SELECTION INPUT AND DISPLAY
const playerInput = document.querySelectorAll('.select');
const playerSelectionDisplay = document.querySelector('.player-selection');
const computerSelectionDisplay = document.querySelector('.computer-selection');
const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissor = document.querySelector('.scissor');

function displayUserSelection(playerInput) {
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


// SCORE

// Stores the game scores
let playerScore = document.querySelector('.player-score');
let computerScore = document.querySelector('.machine-score');

playerScore.textContent = 0;
computerScore.textContent = 0;


// GAME LOGIC


// Compare the User and Computer inputs and output a result
const resultsDisplay = document.querySelector('.results');
const quickWinAudio = document.querySelector('.quick-win-audio');
const quickLoseAudio = document.querySelector('.quick-lose-audio');
const tieAudio = document.querySelector('.tie-audio')

function playRound(playerSelection, computerSelection) {
  if(playerSelection[1] === computerSelection) {
    resultsDisplay.textContent = "It's a tie";
    tieAudio.play();
    return 'tie';
  }  
  else if(playerSelection[1] === 'rock' && computerSelection === 'scissor') {
    resultsDisplay.textContent = "You won! Rock beats Scissor";
    quickWinAudio.play();
    return ++playerScore.textContent
  }  
  else if(playerSelection[1] === 'rock' && computerSelection === 'paper') {
    resultsDisplay.textContent = "You lose! Paper beats Rock";
    quickLoseAudio.play();
    return ++computerScore.textContent
  }  
  else if(playerSelection[1] === 'scissor' && computerSelection === 'paper') {
    resultsDisplay.textContent = "You won! Scissor beats Paper";
    quickWinAudio.play();
    return ++playerScore.textContent
  }  
  else if(playerSelection[1] === 'scissor' && computerSelection === 'rock') {
    resultsDisplay.textContent = "You lose! Rock beats Scissor";
    quickLoseAudio.play();
    return ++computerScore.textContent
  }  
  else if(playerSelection[1] === 'paper' && computerSelection === 'rock') {
    resultsDisplay.textContent = "You won! Paper beats Rock";
    quickWinAudio.play();
    return ++playerScore.textContent
  }  
  else if(playerSelection[1] === 'paper' && computerSelection === 'scissor') {
    resultsDisplay.textContent =  "You lose! Scissor beats Paper";
    quickLoseAudio.play();
    return ++computerScore.textContent
  }  
}  

// Compare the User and the Computer Scores and return the winner
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


// PLAY GAME
const startBtn = document.querySelector('.start-btn');
const restartBtn = document.querySelectorAll('.restart-btn');
const initialScreen = document.querySelector('.info-bg');
const userName = document.querySelector('#name');
const playerName = document.querySelector('.player-name');
const userGenre = document.querySelector('#genre');
const playerImg = document.querySelector('.player-img');
const roundNumber = document.querySelector('.round-n');

function getUserName(event) {
  playerName.textContent = event.target.value;
}

function setUserImg(select) {
  const img = document.createElement('img');
  if (select === 'boy') {
    img.setAttribute("src", "img/boy.png");
  } else {
    img.setAttribute("src", "img/girl.png")
  }
  img.setAttribute("alt", "player");
  playerImg.appendChild(img);
}

userName.addEventListener('change', getUserName);

function playGame() {
  const select = userGenre.options[userGenre.selectedIndex].value;
  setUserImg(select);
  initialScreen.style.display = 'none';
  playerInput.forEach((item) => {
    item.addEventListener('click', (event) => {
      if(roundNumber.textContent <= 5) {
        let userPlay = getUserPlay(event);
        displayUserSelection(userPlay);
        let computerPlay = getComputerPlay();
        displayComputerSelection(computerPlay);
        if (playRound(userPlay, computerPlay) === 'tie') {
          roundNumber.textContent--
        }
        roundNumber.textContent++;
        console.log(roundNumber.textContent)
        if (roundNumber.textContent == 6) {
            defineWinner(playerScore.textContent, computerScore.textContent);
          }
        }
    })});
  }

startBtn.addEventListener('click', playGame);