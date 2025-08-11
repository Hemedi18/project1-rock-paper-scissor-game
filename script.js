
const choices = ["rock", "paper", "scissor"];

const userChoiceDisplay = document.getElementById("user-choice");
const computerChoiceDisplay = document.getElementById("computer-choice");
const resultMessage = document.getElementById("result-message");

const userScoreDisplay = document.getElementById("user-score");
const computerScoreDisplay = document.getElementById("computer-score");

const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorBtn = document.getElementById("scissor");
const resetBtn = document.getElementById("reset");

let userScore = 0;
let computerScore = 0;

rockBtn.addEventListener("click", () => playRound("rock"));
paperBtn.addEventListener("click", () => playRound("paper"));
scissorBtn.addEventListener("click", () => playRound("scissor"));
resetBtn.addEventListener("click", resetGame);

function playRound(userChoice) {
  const computerChoice = getComputerChoice();
  
  userChoiceDisplay.textContent = `Your choice: ${capitalize(userChoice)}`;
  computerChoiceDisplay.textContent = `Computer's choice: ${capitalize(computerChoice)}`;

  const winner = determineWinner(userChoice, computerChoice);
  

  if (winner === "user") {
    userScore++;
    resultMessage.textContent = "You Win! 🎉";
    resultMessage.style.color = "#02ffb3";
  } else if (winner === "computer") {
    computerScore++;
    resultMessage.textContent = "Computer Wins! 💻";
    resultMessage.style.color = "#ff4444";
  } else {
    resultMessage.textContent = "It's a Draw 🤝";
    resultMessage.style.color = "#ffff55";
  }
  
  updateScoreboard();
}

function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function determineWinner(user, computer) {
  if (user === computer) return "draw";
  
  if (
    (user === "rock" && computer === "scissor") ||
    (user === "paper" && computer === "rock") ||
    (user === "scissor" && computer === "paper")
  ) {
    return "user";
  } else {
    return "computer";
  }
}

function updateScoreboard() {
  userScoreDisplay.textContent = `Your score: ${userScore}`;
  computerScoreDisplay.textContent = `Computer's score: ${computerScore}`;
}

function resetGame() {
  userScore = 0;
  computerScore = 0;
  userChoiceDisplay.textContent = "Your choice:";
  computerChoiceDisplay.textContent = "Computer's choice:";
  resultMessage.textContent = "Result:";
  resultMessage.style.color = "#02ffb3";
  updateScoreboard();
}

function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}
