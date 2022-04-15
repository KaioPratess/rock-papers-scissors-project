// 1. User inputs a choice, either: “rock”, “paper” or “scissor”
// Constraints: 
// the user input is case insensitive - ok
// the user can only input ‘rock’, ‘paper’ or ‘scissor’ - pending
function userInput() {
  const input = prompt('Rock, Paper or Scissor?');
  const inputEdited = input.toString().toLowerCase();
  return inputEdited;
}

// 2. Computer inputs a random choice, either “rock”, “paper” or “scissor”
function computerPlay() {
  const gameValues = ['rock', 'paper', 'scissor'];
  const randomInput = gameValues[getRandom(0, gameValues.length)];
  return randomInput;
}
// generates a random number between two defined numbers
function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min) + min)
}

// 3. Compare the User and Computer inputs and output a result
//     1. If User input is equal to Computer input than return “It’s a tie” - ok
//     2. If User is ‘rock’ and Computer is ‘scissor’ than return “You won! Rock beats Scissor” - ok
//     3. If User is ‘rock’ and Computer is ‘paper’ than return “You lose! Paper beats Rock” - ok
//     4. If User is ‘scissor’ and Computer is ‘paper’ than return “You won! Scissor beats Paper” - ok
//     5. If User is ‘scissor’ and Computer is ‘rock’ than return “You lose! Rock beats Scissor” - ok
//     6. If User is ‘paper’ and Computer is ‘rock’ than return “You won! Paper beats Rock” - ok
//     7. If User is ‘paper’ and Computer is ‘scissor’ than return “You lose! Scissor beats Paper” - ok
// 4. If the User wins add 1 point to him
let playerScore = 0;
// 5. If the Computer wins add 1 point to the machine
let computerScore = 0;

function playRound() {
  let playerSelection = userInput();
  let computerSelection = computerPlay();

  if(playerSelection === computerSelection) {
    return "It's a tie"
  }
  else if(playerSelection === 'rock' && computerSelection === 'scissor') {
    return "You won! Rock beats Scissor"
  }
  else if(playerSelection === 'rock' && computerSelection === 'paper') {
    return "You lose! Paper beats Rock"
  }
  else if(playerSelection === 'scissor' && computerSelection === 'paper') {
    console.log();
    return "You won! Scissor beats Paper"
  }
  else if(playerSelection === 'scissor' && computerSelection === 'rock') {
    return "You lose! Rock beats Scissor";
  }
  else if(playerSelection === 'paper' && computerSelection === 'rock') {
    return "You won! Paper beats Rock"
  }
  else if(playerSelection === 'paper' && computerSelection === 'scissor') {
    return "You lose! Scissor beats Paper"
  }
}


// 2. Start round 2
//     1. Repeat all round 1 inside steps
// 3. Start round 3
//     1. Repeat all round 1 inside steps
// 4. Start round 4
//     1. Repeat all round 1 inside steps
// 5. Start round 5
//     1. Repeat all round 1 inside steps

// 2. Compare the User and the Computer Scores
//     1. If userScore is greater than computerScore than return “You are the Champion!”
//     2. If userScore is less than computerScore than return “The Machine won! More luck next time!”