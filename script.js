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

// 2. Start round 2
//     1. Repeat all round 1 inside steps
// 3. Start round 3
//     1. Repeat all round 1 inside steps
// 4. Start round 4
//     1. Repeat all round 1 inside steps
// 5. Start round 5
//     1. Repeat all round 1 inside steps
function game() {
  for(let round = 1; round <= 5; round++) {
    console.log(`Round: ${round}`);
    if(playRound(userInput(), computerPlay()) === 'tie') {
      round -= 1;
    };
    console.log(`Player Score: ${playerScore} | Machine Score: ${computerScore}`);
  }
  defineWinner(playerScore, computerScore);
}

// 6. Compare the User and the Computer Scores
//     1. If userScore is greater than computerScore than return “You are the Champion!”
//     2. If userScore is less than computerScore than return “The Machine won! More luck next time!”
function defineWinner(pScore, cScore) {
  if(pScore > cScore) {
    return console.log("You are the Champion! Congratulations!")
  } else {
    return console.log("The Machine Won! More luck next time")
  }
}