// define variables

let playerScore = 0;
let computerScore = 0;
let winner = "";

function playGame() {
    //repeats the game 5 times
    for (let i = 1; i <= 5; i++) {
        console.log("Round: " + i + "/5");

        let computerValue = 0;
        let computerChoice = getComputerChoice();
        let playerChoice = prompt("Type rock, paper, or scissors:", "").toLowerCase();
        let endMessage = "error #1";
        console.log(playRound(playerChoice, computerChoice));

        // computer slection function
        function getComputerChoice() {
            const minCeiled = Math.ceil(1);
            const maxFloored = Math.floor(3);
            computerValue = Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
            if (computerValue === 1) {
                return "rock";
            } else if (computerValue === 2) {
                return "paper";
            } else if (computerValue === 3) {
                return "scissors";
            } else {
                return "Computer Choice Error"
            }
        }

        // round function
        function playRound(playerChoice, computerChoice) {
            if (playerChoice === computerChoice) {
                endMessage = "Tie! You and the computer both chose " + computerChoice;
                winner = "neither";
            } else if (computerChoice === "rock") {
                if (playerChoice === "paper") {
                    endMessage = "You win! Paper beats rock"
                    winner = "player";
                } else if (playerChoice === "scissors") {
                    endMessage = "You lose! Rock beats paper"
                    winner = "computer";
                }
            } else if (computerChoice === "paper") {
                if (playerChoice === "scissors") {
                    endMessage = "You win! Scissors beats paper"
                    winner = "player";
                } else if (playerChoice === "rock") {
                    endMessage = "You lose! Paper beats rock"
                    winner = "computer";
                }
            } else if (computerChoice === "scissors") {
                if (playerChoice === "rock") {
                    endMessage = "You win! Rock beats scissors"
                    winner = "player";
                } else if (playerChoice === "paper") {
                    endMessage = "You lose! Scissors beats paper"
                    winner = "computer";
                }
            } else {
                endMessage = "error";
            }
            return endMessage;
        }
        alert(endMessage);

        // adding points to record
        if (winner === "computer") {
            computerScore += 1;
        } else if (winner === "player") {
            playerScore += 1;
        } else if (winner === "neither") {
        }
    }
}

// starting the game
playGame();

// end of game messages
if (playerScore > computerScore) {
    console.log("Congradulations, you win the game!");
    alert("Congradulations, you win the game!");
} else if (playerScore > computerScore) {
    console.log("Uh oh! You lost the game");
    alert("Uh oh! You lost the game");
} else {
    console.log("Tie-game! try again")
    alert("Tie-game! try again")
}
console.log("The game is finished, you won " + playerScore + " rounds and the computer won " + computerScore + " rounds");
alert("The game is finished, you won " + playerScore + " rounds and the computer won " + computerScore + " rounds");