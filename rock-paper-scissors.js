// create functions
function getComputerChoice () {
    const minCeiled = Math.ceil(1);
    const maxFloored = Math.floor(3);
    computerValue = Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
    if(computerValue === 1) {
        return "rock";
    } else if (computerValue === 2){
        return "paper";
    } else if (computerValue === 3){
        return "scissors";
    } else {
        return "Computer Choice Error"
    }
}

function getWinner () {
    if (playerInput === computerChoice) {
        endMessage = "tie game";
    } else if (computerChoice === "rock") {
        if (playerInput === "paper") {
            endMessage = "you win"
        } else if (playerInput === "scissors"){
            endMessage = "you lose"
        }
    } else if (computerChoice === "paper") {
        if (playerInput === "scissors") {
            endMessage = "you win"
        } else if (playerValue === "rock"){
            endMessage = "you lose"
        }
    } else if (computerChoice === "scissors") {
        if (playerInput === "rock") {
            endMessage = "you win"
        } else if (playerInput === "paper"){
            endMessage = "you lose"
        }
    } else {
        endMessage = "error #2";
    }

    return endMessage;
}

function playerChoice() {
   if (playerInput !== "rock" && playerInput !== "paper" && playerInput !== "scissors") {

   }
}

// define variables
let computerValue = 0;
let computerChoice = getComputerChoice();

let playerInput = prompt("Type rock, paper, or scissors:", "").toLowerCase();
let endMessage = "error #1";

// create an output
console.log(computerChoice);
console.log(playerInput);
console.log(getWinner());