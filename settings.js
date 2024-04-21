const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");
const humanPoints = document.querySelector(".human-points");
const machinePoints = document.querySelector(".computer-points");
const whoWinSign = document.querySelector("#whoWin-sign");

let humanPointsNumber = 0
let machinePointsNumber = 0
const humanStart = (human) => {
  startTheGame(human, machineStart());
};


const machineStart = () => {
  const choices = ["rock", "paper", "scissors"];
  let randomChoice = Math.floor(Math.random() * 3);
  return choices[randomChoice];
};

const startTheGame = (human, machine) => {
  console.log(`Você escolheu: ${human}; A máquina escolheu: ${machine}.`)
  if (human === machine) {
    whoWinSign.innerHTML = "Empate";
  } else if (
    (human === "scissors" && machine === "paper") ||
    (human === "rock" && machine === "scissors") ||
    (human === "paper" && machine === "rock")
  ) {
    whoWinSign.innerHTML = "Você Ganhou!";
    humanPointsNumber++
    humanPoints.innerHTML = humanPointsNumber
  } else {
    whoWinSign.innerHTML = "Você Perdeu!";
    machinePointsNumber++
    machinePoints.innerHTML = machinePointsNumber
  }
};

rockButton.addEventListener("click", () => humanStart("rock"));
paperButton.addEventListener("click", () => humanStart("paper"));
scissorsButton.addEventListener("click", () => humanStart("scissors"));
