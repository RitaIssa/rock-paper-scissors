const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorBtn = document.querySelector("#scissor");
const div = document.querySelector(".text");
const human = document.querySelector(".humanScore");
const computer = document.querySelector(".computerScore");

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
    
    console.log(playerSelection);
    console.log(computerSelection);

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

// function score(){
//     let humanPlayer = 0;
//     let computerPlayer = 0;
//     for(i = 1; i <= 5; i++){
//         if(div.textContent == "Its a tie!"){
//             human.textContent = "Your Score" + humanPlayer++;
//             computer.textContent = "Computer Score" + computerPlayer++;
//         } else if(div.textContent == "You Win!"){
//             human.textContent = "Your Score" + humanPlayer++;
//         } else {
//             computer.textContent = "Computer Score" + computerPlayer++;
//         }
//     }
// }

let humanPlayer = 0;
let computerPlayer = 0;

function score() {
  for (let i = 1; i <= 5; i++) {
    if (div.textContent == "Its a tie!") {
      humanPlayer++;
      computerPlayer++;
    } else if (div.textContent == "You Win!") {
      humanPlayer++;
    } else {
      computerPlayer++;
    }

    human.textContent = "Your Score: " + humanPlayer;
    computer.textContent = "Computer Score: " + computerPlayer;
  }
}

//Play 5 rounds
//   function playGame(){
//     for(i = 1; i <= 5; i++){
//         let playerChoice = prompt("Let's play a game! Pick rock, paper, or scissors.");
//         const playerSelection = playerChoice.toLowerCase();
//         playRound(playerSelection, getComputerChoice());
//     }
//   }
  
//   console.log(playGame());