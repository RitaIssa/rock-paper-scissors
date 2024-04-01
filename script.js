const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorBtn = document.querySelector("#scissor");
const div = document.querySelector(".text");
const human = document.querySelector(".humanScore");
const computer = document.querySelector(".computerScore");
const humanChoice = document.querySelector(".playerChoice");
const computerChoice = document.querySelector(".computerChoice");
const winner = document.querySelector(".winner");
const resetBtn = document.querySelector("#reset");

rockBtn.addEventListener("click", () => {
  playRound("rock", getComputerChoice());
  score();
});

paperBtn.addEventListener("click", () => {
    playRound("paper", getComputerChoice());
    score();
});

scissorBtn.addEventListener("click", () => {
    playRound("scissors", getComputerChoice());
    score();
});

resetBtn.addEventListener("click", resetGame);

//Get the computers choice. 
//It will randomly return rock, paper, or scissors
//Math.random gets between 0 and less than 1
//Math.random rounds the values so we don't get decimal values
//Multiply Math.random by the length of the choice array which is 3
//So thru this we are getting random numbers either 0, 1, or 2
//Choice[0] gives rock, choice[1] gives paper, and choice[2] gives scissors
function getComputerChoice(){
    let choice = ["rock", "paper", "scissors"]
    return choice[(Math.floor(Math.random() * (choice.length)))]
}

//Play a single round
function playRound(playerSelection, computerSelection){
  
  humanChoice.textContent = "Players Choice: " + playerSelection;
  computerChoice.textContent = "Computers Choice:" + computerSelection;

    if(playerSelection == "rock" && computerSelection == "rock" || playerSelection == "paper" && computerSelection == "paper" || playerSelection == "scissors" && computerSelection == "scissors"){
        div.textContent = "Its a tie!";
    } else if (playerSelection == "rock" && computerSelection == "paper"){
        div.textContent = "You Lose! Paper beats Rock";
    } else if (playerSelection == "rock" && computerSelection == "scissors"){
        div.textContent = "You Win! Rock beats Scissors";
    } else if (playerSelection == "paper" && computerSelection == "rock"){
        div.textContent = "You Win! Paper beats Rock";
    } else if (playerSelection == "paper" && computerSelection == "scissors"){
        div.textContent = "You Lose! Scissors beats Paper";
    } else if (playerSelection == "scissors" && computerSelection == "rock"){
        div.textContent = "You Lose! Rock beats Scissors";
    } else if (playerSelection == "scissors" && computerSelection == "paper"){
        div.textContent = "You Win! Scissors beats Paper";
    }
}

let humanPlayer = 0;
let computerPlayer = 0;
let round = 0;
human.textContent = "Player Score: " + humanPlayer;
computer.textContent = "Computer Score: " + computerPlayer;

function score() {

    if (div.textContent.includes("Its a tie!")) {
      humanPlayer++;
      computerPlayer++;
    } else if (div.textContent.includes("You Win!")) {
      humanPlayer++;
    } else {
      computerPlayer++;
    }

    human.textContent = "Player Score: " + humanPlayer;
    computer.textContent = "Computer Score: " + computerPlayer;

    round++;

    if (round == 5) {
      if(humanPlayer == computerPlayer){
        winner.textContent = "It's a tie! Try to win next time!!!";
      } else if (humanPlayer > computerPlayer) {
        winner.textContent = "Congratulations! You won!!!";
      } else {
        winner.textContent = "Oufff! Better luck next time ;(";
      }
      resetBtn.style.display = "block";
      rockBtn.disabled = true;
      paperBtn.disabled = true;
      scissorBtn.disabled = true;
    }
}


function resetGame() {
  humanPlayer = 0;
  computerPlayer = 0;
  round = 0;
  humanChoice.textContent = "Players Choice:";
  computerChoice.textContent = "Computers Choice:";
  human.textContent = "Player Score: " + 0;
  computer.textContent = "Computer Score: " + 0;
  div.textContent = "";
  winner.textContent = "";
  resetBtn.style.display = "none";
  rockBtn.disabled = false;
  paperBtn.disabled = false;
  scissorBtn.disabled = false;
}