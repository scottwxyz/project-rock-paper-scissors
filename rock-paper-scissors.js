/* variables */
let humanScore = 0;
let computerScore = 0;
let computerChoice;

playGame();

function playGame() {
    for (i = 1; i <= 5; i++) {
        playRound(humanThrow = getHumanChoice(), computerThrow = getComputerChoice());     
    } 
    console.log("FINAL SCORE: Human " + humanScore + ", Computer " + computerScore + ".");
}

function playRound(humanPlayer, computerPlayer) {
    console.log("ROUND " + i);
    console.log("Computer Choice is " + computerThrow);
    console.log("Human Choice is " + humanThrow);
    if (humanPlayer === computerPlayer) { // RESULT IS A TIE
        console.log("Result of Round " + i + ": it's a tie!");
        console.log("The score after round " + i + " is Human " + humanScore + ", Computer " + computerScore + ".");

    } else if ((humanPlayer === "rock" && computerPlayer === "scissors") ||
                (humanPlayer === "paper" && computerPlayer === "rock") ||
                (humanPlayer === "scissors" && computerPlayer === "paper")
    ) { // RESULT IS HUMAN WINS
        console.log("Result of Round " + i + ": the human wins!");
        humanScore++;
        console.log("The score after round " + i + " is Human " + humanScore + ", Computer " + computerScore + ".");
    } else { //RESULT IS COMPUTER WINS
        console.log("Result of Round " + i + ": the computer wins!");
        computerScore++;
        console.log("The score after round " + i + " is Human " + humanScore + ", Computer " + computerScore + ".");
    }
}

/* get the computer's random choice  */
function getComputerChoice() {
    let choice = Math.random();
    if (choice <= 0.333) {
        computerChoice = "rock";
    } else if (choice > 0.333 && choice <= 0.666) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
    }
    return computerChoice;
}

/* get the human's choice */
function getHumanChoice() {
    let humanChoice = prompt("Human makes its choice now.");
    return humanChoice;
}







