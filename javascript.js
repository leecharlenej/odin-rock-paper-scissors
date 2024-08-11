// console.log("Hello World");

choiceArr = ["rock", "paper", "scissors"];

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

    console.log(`You choice: ${capitalizeFirstLetter(humanChoice)} vs. Computer's choice: ${capitalizeFirstLetter(computerChoice)}`);

    if (computerChoice === humanChoice) {
        console.log("It's a draw!");

    } else if (computerChoice === "rock") {

        switch (humanChoice) {
            case "paper":
                humanScore++;
                console.log(`You win! ${capitalizeFirstLetter(humanChoice)} beats ${computerChoice}.`);
                break;
            case "scissors":
                computerScore++;
                console.log(`You lose! ${capitalizeFirstLetter(humanChoice)}  loses to ${computerChoice}.`);
                break;
        }   
    } else if (computerChoice === "paper") {

        switch (humanChoice) {
            case "scissors":
                humanScore++;
                console.log(`You win! ${capitalizeFirstLetter(humanChoice)} beats ${computerChoice}.`);
                break;
            case "rock":
                computerScore++;
                console.log(`You lose! ${capitalizeFirstLetter(humanChoice)} loses to ${computerChoice}.`);
                break;
        }
    } else if (computerChoice === "scissors") {

        switch (humanChoice) {
            case "rock":
                humanScore++;
                console.log(`You win! ${capitalizeFirstLetter(humanChoice)} beats ${computerChoice}.`);
                break;
            case "paper":
                computerScore++;
                console.log(`You lose! ${capitalizeFirstLetter(humanChoice)} loses to ${computerChoice}.`);
                break;
        } 
    }
    
    console.log(`Score board: You - ${humanScore} Computer - ${computerScore}`);
    return [humanScore, computerScore];

}

// playRound(humanSelection, computerSelection);

function playGame (numInput) {
    
    num = parseInt(numInput);
    let humanScore = 0;
    let computerScore = 0;

    for (let i=0; i< num; i++) {
        console.log(`---------- Round ${i+1} begins! ----------`)
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        roundScore = playRound(humanScore, computerScore, humanSelection, computerSelection);
        humanScore = roundScore[0];
        computerScore = roundScore[1];
    }

    console.log(`The final score is: You - ${humanScore} Computer - ${computerScore}`)

    if (humanScore > computerScore) {
        console.log("You win!");
    } else if (humanScore < computerScore) {
        console.log("You lose!");
    } else {
        console.log("No one wins!");
    }

}