// console.log("Hello World");

const choiceArr = ["rock", "paper", "scissors"];

function getComputerChoice() {
    compNum = Math.floor(Math.random() * choiceArr.length);
    return choiceArr[compNum];
}

function getHumanChoice() {
    humanInput = prompt("Please choose rock, paper or scissors: ");
    humanInputLower = humanInput.toLowerCase();

    humanInputLowerValid = (humanInputLower === "rock") ||  (humanInputLower === "paper") || (humanInputLower === "scissors");

    while(!humanInputLowerValid) {
        console.log("Please choose a valid option.");
        getHumanChoice();
    }

    return humanInputLower;
}

function capitalizeFirstLetter (stringInput) {
    return stringInput.charAt(0).toUpperCase() + stringInput.slice(1);
}

function playRound(humanScore, computerScore, humanChoice, computerChoice) {
    let choices = document.querySelector("div.choices");
    let results = document.querySelector("div.results");

    choices.textContent = `You choice: ${capitalizeFirstLetter(humanChoice)} vs. Computer's choice: ${capitalizeFirstLetter(computerChoice)}`;
    // console.log(`You choice: ${capitalizeFirstLetter(humanChoice)} vs. Computer's choice: ${capitalizeFirstLetter(computerChoice)}`);

    if (computerChoice === humanChoice) {
        results.textContent = "It's a draw!";
        // console.log("It's a draw!");

    } else if (computerChoice === "rock") {

        switch (humanChoice) {
            case "paper":
                humanScore++;
                results.textContent = `You win! ${capitalizeFirstLetter(humanChoice)} beats ${computerChoice}.`;
                //console.log(`You win! ${capitalizeFirstLetter(humanChoice)} beats ${computerChoice}.`);
                break;
            case "scissors":
                computerScore++;
                results.textContent = `You lose! ${capitalizeFirstLetter(humanChoice)}  loses to ${computerChoice}.`;
                //console.log(`You lose! ${capitalizeFirstLetter(humanChoice)}  loses to ${computerChoice}.`);
                break;
        }   
    } else if (computerChoice === "paper") {

        switch (humanChoice) {
            case "scissors":
                humanScore++;
                results.textContent = `You win! ${capitalizeFirstLetter(humanChoice)} beats ${computerChoice}.`;
                // console.log(`You win! ${capitalizeFirstLetter(humanChoice)} beats ${computerChoice}.`);
                break;
            case "rock":
                computerScore++;
                results.textContent = `You lose! ${capitalizeFirstLetter(humanChoice)} loses to ${computerChoice}.`;
                // console.log(`You lose! ${capitalizeFirstLetter(humanChoice)} loses to ${computerChoice}.`);
                break;
        }
    } else if (computerChoice === "scissors") {

        switch (humanChoice) {
            case "rock":
                humanScore++;
                results.textContent = `You win! ${capitalizeFirstLetter(humanChoice)} beats ${computerChoice}.`;
                // console.log(`You win! ${capitalizeFirstLetter(humanChoice)} beats ${computerChoice}.`);
                break;
            case "paper":
                computerScore++;
                results.textContent = `You lose! ${capitalizeFirstLetter(humanChoice)} loses to ${computerChoice}.`;
                // console.log(`You lose! ${capitalizeFirstLetter(humanChoice)} loses to ${computerChoice}.`);
                break;
        } 
    }
    
    // console.log(`Score board: You - ${humanScore} Computer - ${computerScore}`);
    return [humanScore, computerScore];

}

// // playRound(humanSelection, computerSelection);


let userChoice = document.querySelector(".userChoice");
let humanScore = 0;
let computerScore = 0;
let humanScoreDisplay = document.querySelector("#humanScore");
let computerScoreDisplay = document.querySelector("#computerScore");
let finalResult = document.querySelector("div.results")

let gameCounter = 0;
let gameCounterDisplay = document.querySelector("#gameCounter")


// -------------------------------------------------------
// 1. Store Event Handler in a function.
// 2. Attach and remove event listener on Parent element.
// -------------------------------------------------------

const handleUserChoice = (event) => {
    gameCounter++;
    gameCounterDisplay.textContent = gameCounter;

    let target = event.target;
    let computerChoice = getComputerChoice();

    switch(target.id) {
        case 'rock':
            roundScore = playRound(humanScore, computerScore, "rock", computerChoice);
            humanScore = roundScore[0];
            computerScore = roundScore[1];
            break;
        case 'paper':
            roundScore = playRound(humanScore, computerScore, "paper", computerChoice);
            humanScore = roundScore[0];
            computerScore = roundScore[1];
            break;
        case 'scissors':
            roundScore = playRound(humanScore, computerScore, "scissors", computerChoice);
            humanScore = roundScore[0];
            computerScore = roundScore[1];
            break;
    }

    humanScoreDisplay.textContent = humanScore;
    computerScoreDisplay.textContent = computerScore;

    if (humanScore === 5 || computerScore === 5) {
        finalResult.innerHTML = '<span id="ends">The game ends!</span>';
        userChoice.removeEventListener("click", handleUserChoice);

        // console.log("The game ends!")
    };

};

userChoice.addEventListener("click", handleUserChoice);
