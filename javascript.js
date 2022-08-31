let playerScore = 0; 
let computerScore = 0;
const rockButton = document.querySelector("#Rock");
const paperButton = document.querySelector("#Paper");
const scissorsButton = document.querySelector("#Scissors");
const score = document.querySelector("#score");
const playerWin = document.querySelector("#playerWin");
const computerWin = document.querySelector("#computerWin");

rockButton.addEventListener("click", ()=>{pC = "rock"; playAGame()});
paperButton.addEventListener("click", ()=>{pC = "paper"; playAGame()});
scissorsButton.addEventListener("click", ()=>{pC = "scissors"; playAGame()});

function gatherPlayerChoice() {
    return pC; 
}

function gatherComputerChoice() { 
    const numCC = Math.floor(Math.random() * (3 - 1 + 1) + 1)
    console.log(numCC);
    const comC = comChoiceAssigner(numCC)
    console.log(comC);
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
    playerWin.style.cssText = "background: darkgreen";
    computerWin.style.cssText = "background: darkred";
    const pC = gatherPlayerChoice();
    const comC = gatherComputerChoice();
    const result = adjudicator(pC, comC);
    scoreTracker(result);
    score.textContent=`Player: ${playerScore} || Computer: ${computerScore}`;
}

function scoreTracker (result) {
    if (result == "win") { 
        playerWin.style.cssText = "background: lime";
        playerScore +=1; 
    } else if (result == "loss") {
        computerScore +=1; 
        computerWin.style.cssText = "background: red";
    }
}



/*while (playerScore < 5 && computerScore<5) { 
    playAGame();
    console.log(playerScore);
    console.log(computerScore);
}*/



