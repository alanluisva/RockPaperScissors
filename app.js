function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3) + 1;
    if (computerChoice === 1) {
        return "Rock";
    } else if (computerChoice === 2) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    let player1 = playerSelection.toLowerCase();
    let player2 = computerSelection.toLowerCase();

    if (player1 === "rock") {
        if (player2 === "scissors") {
            return "You win! Rock beats Scissors";
        } else if (player2 === "paper") {
            return "You Lose! Paper beats Rock";
        } else if (player2 === "rock") {
            return "Draw!";
        }
    } else if (player1 === "scissors") {
        if (player2 === "scissors") {
            return "Draw";
        } else if (player2 === "paper") {
            return "You win! Scissors beats Paper";
        } else if (player2 === "rock") {
            return "You Lose! Rock beats  scissors";
        }
    } else if (player1 === "paper") {
        if (player2 === "scissors") {
            return "You Lose! Scissors beats Paper";
        } else if (player2 === "paper") {
            return "Draw!";
        } else if (player2 === "rock") {
            return "You Win! Paper beats  Rock";
        }
    }
}