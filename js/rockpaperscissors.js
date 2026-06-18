function getRandomInt(max) {
    return Math.floor(Math.random() * max)
}

function getComputerChoice() {
    switch(getRandomInt(3)) {
        case 0:
            return "rock";
            break;
        case 1:
            return  "paper";
            break;
        case 2:
            return "scissor";
    }
}

function getHumanChoice() {
    return prompt("What is your choice? (rock / paper /scissor)");
}

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();
    console.log("You choose: " + humanChoice);
    console.log("Computer choose: " + computerChoice);

    if (humanChoice === computerChoice) {
        console.log("It's a tie, you have same choice as computer!");
    } else if (humanChoice === "rock" && computerChoice === "paper" ) {
        console.log("You lose, paper beats rock!");
        computerScore += 1;
    } else if (humanChoice === "paper" && computerChoice === "scissor" ) {
        console.log("You lose, scissor beats paper!");
        computerScore += 1;
    } else if (humanChoice === "scissor" && computerChoice === "rock" ) {
        console.log("You lose, rock beats scissor!");
        computerScore += 1;
    } else if (humanChoice === "paper" && computerChoice === "rock" ) {
        console.log("You win, paper beats rock!");
        humanScore += 1;
    } else if (humanChoice === "scissor" && computerChoice === "paper" ) {
        console.log("You win, scissor beats paper!");
        humanScore += 1;
    } else if (humanChoice === "rock" && computerChoice === "scissor" ) {
        console.log("You win, rock beats scissor!");
        humanScore += 1;
    };
}

function playGame(numberOfRound) {
    let humanMessage = "Your score: ";
    let computerMessage = "Computer score: ";

    for (let i = 1; i <= numberOfRound; i++) {

        console.log("Round " + i.toString());

        playRound(getHumanChoice(), getComputerChoice());

        if (i === numberOfRound) {
            humanMessage = "Your final score: ";
            computerMessage = "Computer final score: ";
        }
        
        console.log(humanMessage + humanScore.toString());
        console.log(computerMessage + computerScore.toString());

        if (i === numberOfRound && humanScore > computerScore) {
            console.log("Congratulations! You won!");
        } else if (i === numberOfRound && humanScore === computerScore) {
            console.log("It's a tie! Better luck next time :)");
        } else if (i === numberOfRound && humanScore < computerScore) {
            console.log("You lose! Better luck next time :)");
        }

        console.log("==========================")
    }

}

let humanScore = 0;
let computerScore = 0;

playGame(3);
