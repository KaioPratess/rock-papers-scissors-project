// User inputs a choice, either: “rock”, “paper” or “scissor”
function getUserPlay() {
  const input = prompt('Rock, Paper or Scissor?');
  const inputEdited = input.toString().toLowerCase();
  return inputEdited;
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

// Stores the game scores
let playerScore = 0;
let computerScore = 0;

// Compare the User and Computer inputs and output a result
function playRound(playerSelection, computerSelection) {
  if(playerSelection === computerSelection) {
    console.log("It's a tie");
    return 'tie';
  }
  else if(playerSelection === 'rock' && computerSelection === 'scissor') {
    console.log("You won! Rock beats Scissor");
    return ++playerScore
  }
  else if(playerSelection === 'rock' && computerSelection === 'paper') {
    console.log("You lose! Paper beats Rock");
    return ++computerScore
  }
  else if(playerSelection === 'scissor' && computerSelection === 'paper') {
    console.log("You won! Scissor beats Paper");
    return ++playerScore
  }
  else if(playerSelection === 'scissor' && computerSelection === 'rock') {
    console.log("You lose! Rock beats Scissor");
    return ++computerScore
  }
  else if(playerSelection === 'paper' && computerSelection === 'rock') {
    console.log("You won! Paper beats Rock");
    return ++playerScore
  }
  else if(playerSelection === 'paper' && computerSelection === 'scissor') {
    console.log( "You lose! Scissor beats Paper");
    return ++computerScore
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
