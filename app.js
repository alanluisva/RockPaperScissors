let player1Score = 0;
let player2Score = 0;
const buttons = document.querySelectorAll("button");

function getComputerChoice() {
    let choices = ["Rock", "Paper", "Scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
}

function disableButtons() {
    buttons.forEach(elem => {
        elem.disabled = true;
    });
}

function playRound(playerSelection, computerSelection) {
    let result = "";

    if (playerSelection === computerSelection) {
        result = `<br> Draw! <br> Player score: ${player1Score} vs Computer score: ${player2Score}`;
    } else if (
        (playerSelection === "Rock" && computerSelection === "Scissors") ||
        (playerSelection === "Scissors" && computerSelection === "Paper") ||
        (playerSelection === "Paper" && computerSelection === "Rock")
    ) {
        player1Score++;
        result = `<br> You Win! ${playerSelection} beats ${computerSelection} <br> Player score: ${player1Score} vs Computer score: ${player2Score}`;
    } else {
        player2Score++;
        result = `<br> You Lose! ${computerSelection} beats ${playerSelection} <br> Player score: ${player1Score} vs Computer score: ${player2Score}`;
    }

    document.querySelector("div").innerHTML = result;

    if (player1Score === 5) {
        document.querySelector("div").innerHTML += `<br><br>YOU WON THE GAME!`;
        disableButtons();
    } else if (player2Score === 5) {
        document.querySelector("div").innerHTML += `<br><br>THE COMPUTER WON THE GAME!`;
        disableButtons();
    }
}

buttons.forEach(button => {
    // for each one we add a 'click' listener
    button.addEventListener("click", () => {
        playRound(button.textContent, getComputerChoice());
    });
});
