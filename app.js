function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3) + 1;
    if (computerChoice === 1) {
        return "rock";
    } else if (computerChoice === 2) {
        return "paper";
    }
    return "scissors";
}

let player1Score = 0;
let player2Score = 0;

function playRound(playerSelection, computerSelection) {
    let player = playerSelection.toLowerCase();

    if (player === computerSelection) {
        return "Draw!";
    } else if (
        (player === "rock" && computerSelection === "scissors") ||
        (player === "scissors" && computerSelection === "paper") ||
        (player === "paper" && computerSelection === "rock")
    ) {
        player1Score++;
        return `You Win! ${player} beats ${computerSelection}`;
    }
    player2Score++;
    return `You Lose! ${computerSelection} beats ${player}`;
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
