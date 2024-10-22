/* variables */

global humanScore = 0;
global computerScore = 0;

/* step 1 - - write the logic to get the computer choice
--- create a getComputerChoice function
--- have it randomly return 1 of 3 strtings: rock, paper, scissors
    hints: Math.random method and you don't need arrays
--- test that it works in the console before moving on */

function getComputerChoice() {
    let choice = Math.random();
    if (choice <= 0.333) {
        computerChoice = "Rock";
    } else if (choice > 0.333 && choice <= 0.666) {
        computerChoice = "Paper";
    } else {
        computerChoice = "Scissors";
    }
    return computerChoice;
}


/* step 2 - write the logic to get the human choice
--- create a getHumanChoice function
--- have it return one of the choices depending on what the user inputs
    hint: use the prompt method to get the input
--- test that it works in the console before moving on */

function getHumanChoice() {
    let humanChoice = prompt("Human makes its choice now.");
    return humanChoice;
}

function determineWinner(player1,player2) {
    if (player1 === player2) {
        /* RESULT IS A TIE */
    } else {"rock" && player2 === "rock" 
}

console.log("Computer Choice");
console.log(getComputerChoice());
console.log("Human Choice");
console.log(getHumanChoice());




