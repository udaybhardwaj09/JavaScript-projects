const choices = ["rock", "paper", "scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");

function playGame(playerChoice){

    const computerChoice = choices[Math.floor(Math.random() * 3)];

    let result = "";

    if(playerChoice === computerChoice){
        result = "IT'S A TIE";
    }
    else{
        switch(playerChoice){
            case "rock":
                result = (computerChoice === "scissors") ? "YOU WIN!" : "YOU LOSE";
                break;
            case "paper":
                result = (computerChoice === "scissors") ? "YOU LOSE" : "YOU WIN!";
                break;
            case "scissors":
                result = (computerChoice === "paper") ? "YOU WIN!" : "YOU LOSE";
                break;
        }
    }

    playerDisplay.textContent = `PLAYER: ${playerChoice}`;
    computerDisplay.textContent = `COMPUTER: ${computerChoice}`;
    if(result==="YOU WIN!"){
        resultDisplay.style.color = "green";
    }
    else if(result==="YOU LOSE"){
        resultDisplay.style.color = "tomato";
    }
    else{
        resultDisplay.style.color = "black";
    }
    resultDisplay.textContent = result;
}