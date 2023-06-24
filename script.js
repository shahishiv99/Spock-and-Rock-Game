const playerScoreEl = document.getElementById("playerScore");
const playerChoiceEl = document.getElementById("playerChoice");
const computerScoreEl = document.getElementById("computerScore");
const computerChoiceEl = document.getElementById("computerChoice");
const resultTextEl = document.getElementById("resultText");

const playerRockEl = document.getElementById("playerRock");
const playerPaperEl = document.getElementById("playerPaper");
const playerScissorsEl = document.getElementById("playerScissors");
const playerLizardEl = document.getElementById("playerLizard");
const playerSpockEl = document.getElementById("playerSpock");

const computerRockEl = document.getElementById("computerRock");
const computerPaperEl = document.getElementById("computerPaper");
const computerScissorsEl = document.getElementById("computerScissors");
const computerLizardEl = document.getElementById("computerLizard");
const computerSpockEl = document.getElementById("computerSpock");

const allGameIcons = document.querySelectorAll(".fa-solid");
let computerChoice = "";
let playerScoreNumber = 0;
let computerScoreNumber = 0;

const choices = {
  rock: { name: "Rock", defeats: ["scissors", "lizard"] },
  paper: { name: "Paper", defeats: ["rock", "spock"] },
  scissors: { name: "Scissors", defeats: ["paper", "lizard"] },
  lizard: { name: "Lizard", defeats: ["paper", "spock"] },
  spock: { name: "Spock", defeats: ["scissors", "rock"] },
};

// Reset Selected Value
function resetSelectedIcon() {
  allGameIcons.forEach((e) => {
    e.classList.remove("selected");
  });
}

// Reset All Score and Choice

function resetAll() {
  playerScoreNumber = 0;
  computerScoreNumber = 0;
  playerScoreEl.textContent = playerScoreNumber;
  computerScoreEl.textContent = computerScoreNumber;
  playerChoiceEl.textContent = "";
  computerChoiceEl.textContent = "";
  resultTextEl.textContent = "";
  resetSelectedIcon();
}

// Random Computer Choice
function computerRandomChoice() {
  let computerRandomNumber = Math.floor(Math.random() * 5);
  if (computerRandomNumber === 0) {
    computerChoice = "rock";
  } else if (computerRandomNumber === 1) {
    computerChoice = "paper";
  } else if (computerRandomNumber === 2) {
    computerChoice = "scissors";
  } else if (computerRandomNumber === 3) {
    computerChoice = "lizard";
  } else {
    computerChoice = "spock";
  }
}

//  Add Selected Styling and Computer Choice
function displayComputerSelect() {
  switch (computerChoice) {
    case "rock":
      computerRockEl.classList.add("selected");
      computerChoiceEl.textContent = " --- Rock";
      break;
    case "paper":
      computerPaperEl.classList.add("selected");
      computerChoiceEl.textContent = " --- Paper";
      break;
    case "scissors":
      computerScissorsEl.classList.add("selected");
      computerChoiceEl.textContent = " --- Scissors";
      break;
    case "lizard":
      computerLizardEl.classList.add("selected");
      computerChoiceEl.textContent = " --- Lizard";
      break;
    case "spock":
      computerSpockEl.classList.add("selected");
      computerChoiceEl.textContent = " --- Spock";
      break;
    default:
      break;
  }
}

// Update Score, Check Results and increase scores

function updateScore(playerChoice) {
  if (playerChoice === computerChoice) {
    resultTextEl.textContent = `It's tie!`;
  } else {
    const choice = choices[playerChoice];
    if (choice.defeats.indexOf(computerChoice) > -1) {
      resultTextEl.textContent = `You Won!`;
      playerScoreNumber++;
      playerScoreEl.textContent = playerScoreNumber;
    } else {
      resultTextEl.textContent = `You lose`;
      computerScoreNumber++;
      computerScoreEl.textContent = computerScoreNumber;
    }
  }
}

// call functions to process turn
function checkResults(playerChoice) {
  resetSelectedIcon();
  computerRandomChoice();
  displayComputerSelect();
  updateScore(playerChoice);
}

// Passing Player selection value and styling icons
function select(playerChoice) {
  checkResults(playerChoice);
  //  Add Selected Styling and Player Choice
  switch (playerChoice) {
    case "rock":
      playerRockEl.classList.add("selected");
      playerChoiceEl.textContent = " --- Rock";
      break;
    case "paper":
      playerPaperEl.classList.add("selected");
      playerChoiceEl.textContent = " --- Paper";
      break;
    case "scissors":
      playerScissorsEl.classList.add("selected");
      playerChoiceEl.textContent = " --- Scissors";
      break;
    case "lizard":
      playerLizardEl.classList.add("selected");
      playerChoiceEl.textContent = " --- Lizard";
      break;
    case "spock":
      playerSpockEl.classList.add("selected");
      playerChoiceEl.textContent = " --- Spock";
      break;
    default:
      break;
  }
}

// Set Initial Value
resetAll();
