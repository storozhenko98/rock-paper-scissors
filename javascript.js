let playerScore = 0; 
let computerScore = 0;


function gatherPlayerChoice() {
    const cipC = prompt("Rock, Paper, Scissors?");
    const pC = cipC.toLowerCase(); 
    console.log(pC);
    return pC; 
}

function gatherComputerChoice() { 
    const numCC = Math.floor(Math.random() * (3 - 1 + 1) + 1)
    console.log(numCC);
    const comC = comChoiceAssigner(numCC)
    console.log(comC);
    alert(`Computer chose ${comC}.`)
    return comC;
}

function comChoiceAssigner(numCC) {
    if (numCC == 1) {
        return "rock";
    } else if (numCC == 2) {
        return "paper";
    } else if (numCC == 3) {
        return "scissors";
    }
}

function adjudicator(pC, comC) {
    if (pC == "rock" && comC == "rock") {
        console.log("tie");
        return "tie";
    } else if (pC == "rock" && comC == "paper") {
        console.log("loss");
        return "loss";
    } else if (pC == "rock" && comC == "scissors") {
        console.log("win");
        return "win";
    } else if (pC == "paper" && comC == "paper") {
        console.log("tie");
        return "tie";
    } else if (pC == "paper" && comC == "rock") {
        console.log("win");
        return "win";
    } else if (pC == "paper" && comC == "scissors") {
        console.log("loss");
        return "loss";
    } else if (pC == "scissors" && comC == "rock") { 
        console.log("loss");
        return "loss";
    } else if (pC == "scissors" && comC == "paper") {
        console.log("win");
        return "win";
    } else if (pC == "scissors" && comC == "scissors") { 
        console.log("tie");
        return "tie";
    }
}


function playAGame() {
    const pC = gatherPlayerChoice();
    const comC = gatherComputerChoice();
    const result = adjudicator(pC, comC);
    alert(`The result, for you, is a ${result}`);
    scoreTracker(result);

}

function scoreTracker (result) {
    if (result == "win") { 
        playerScore +=1; 
    } else if (result == "loss") {
        computerScore +=1; 
    }
    alert(`You have ${playerScore} points, while the Computer has ${computerScore} points`)
}

while (playerScore < 5 && computerScore<5) { 
    playAGame();
    console.log(playerScore);
    console.log(computerScore);
}



