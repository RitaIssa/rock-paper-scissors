//Get the comupters choice. 
//It will randomly return rock, paper, or scissors
//Math.random gets between 0 and less than 1
//Math.random rounds the values so we don't get decimal values
//Multiply Math.random by the length of the choice array which is 3
//So thru this we are getting random numbers either 0, 1, or 2
//Choice[0] gives rock, choice[1] gives paper, and choice[2] gives scissors

function getComputerChoice(){
    let choice = ["Rock", "Paper", "Scissors"]
    return choice[(Math.floor(Math.random() * (choice.length)))]
}
