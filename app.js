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

let player1Score = 0;
let player2Score = 0;

function playRound(playerSelection, computerSelection) {
    let player = playerSelection.toLowerCase();
    let computer = computerSelection.toLowerCase();

    if (player === computer) {
        return "Draw!";
    } else if (
        (player === "rock" && computer === "scissors") ||
        (player === "scissors" && computer === "paper") ||
        (player === "paper" && computer === "rock")
    ) {
        player1Score++;
        return `You Win! ${player} beats ${computer}`;
    }
    player2Score++;
    return `You Lose! ${computer} beats ${player}`;
}

function game() {
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt(
            "Choose one of three shapes (rock, paper or scissors)"
        );
        const computerSelection = getComputerChoice();

        let result = playRound(playerSelection, computerSelection);
        alert(result);
        console.log(result);
        console.log(
            `Player score: ${player1Score} vs Computer score: ${player2Score}`
        );
        console.log("-------------------------------------");
    }
    if (player1Score > player2Score) {
        alert("YOU WON THE GAME!");
    } else if (player1Score < player2Score) {
        alert("THE COMPUTER WON THE GAME!");
    } else {
        alert("IT'S A TIE!");
    }
}
