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

let player1Score = 0
let player2Score = 0

function playRound(playerSelection, computerSelection) {
    let player1 = playerSelection.toLowerCase();
    let player2 = computerSelection.toLowerCase();

    if (player1 === "rock") {
        if (player2 === "scissors") {
            player1Score++
            return "You win! Rock beats Scissors";
        } else if (player2 === "paper") {
            player2Score++
            return "You Lose! Paper beats Rock";
        } else if (player2 === "rock") {
            return "Draw!";
        }
    } else if (player1 === "scissors") {
        if (player2 === "scissors") {
            return "Draw!";
        } else if (player2 === "paper") {
            player1Score++
            return "You win! Scissors beats Paper";
        } else if (player2 === "rock") {
            player2Score++
            return "You Lose! Rock beats scissors";
        }
    } else if (player1 === "paper") {
        if (player2 === "scissors") {
            player2Score++
            return "You Lose! Scissors beats Paper";
        } else if (player2 === "paper") {
            return "Draw!";
        } else if (player2 === "rock") {
            player1Score++
            return "You Win! Paper beats Rock";
        }
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("Choose one of three shapes (rock, paper or scissors)");
        const computerSelection = getComputerChoice();

        console.log(playRound(playerSelection, computerSelection));
        console.log(`Player score: ${player1Score} vs Computer score: ${player2Score}`)
        console.log("-------------------------------------")
    } if (player1Score > player2Score) {
        console.log("YOU WON THE GAME!")
    } else if (player1Score < player2Score) {
        console.log("THE COMPUTER WON THE GAME!")
    } else {
        console.log("IT'S A TIE!")
    }
}

game()