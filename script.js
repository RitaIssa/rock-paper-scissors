//Get the comupters choice. 
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
function playRound(playerSelection, computerSelection) {
    if(playerSelection == "rock" && computerSelection == "rock"){
        console.log("Its a tie!");
    } else if (playerSelection == "rock" && computerSelection == "paper"){
        console.log("You Lose! Paper beats Rock");
    } else if (playerSelection == "rock" && computerSelection == "scissors"){
        console.log("You Win! Rock beats Scissors");
    }
}
  const player = "ROCK";
  const playerSelection = player.toLowerCase();
  const computerSelection = getComputerChoice();
  console.log(computerSelection);
  console.log(playerSelection);
  console.log(playRound(playerSelection, computerSelection));
  