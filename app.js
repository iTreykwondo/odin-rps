const rockButton = document.querySelector(".rock");
const paperButton = document.querySelector(".paper");
const scissorsButton = document.querySelector(".scissors");
const results = document.querySelector(".results h2");
const replayButton = document.querySelector(".replay");

let playerScoreLabel = document.querySelector("#p-score");
let cpuScoreLabel = document.querySelector("#cpu-score");

let cpuScore = 0;
let playerScore = 0;

const computerPlay = (choice) => {
  let option = Math.floor(Math.random() * 3 + 1);

  switch (option) {
    case 1:
      choice = "rock";
      break;
    case 2:
      choice = "paper";
      break;
    case 3:
      choice = "scissors";
      break;
  }
  return choice;
};

const playRound = (playerSelection, computerSelection) => {
  // playerSelection = prompt("Enter Rock, Paper or Scissors!").toLowerCase();
  computerSelection = computerPlay();

  if (playerSelection === computerSelection) {
    return (results.textContent = "It's a tie");
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    return (
      (results.textContent = `You lose. Paper beats rock`),
      (cpuScore += 1),
      (cpuScoreLabel.textContent = cpuScore)
    );
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    return (
      (results.textContent = `You win. Rock beats scissor`),
      (playerScore += 1),
      (playerScoreLabel.textContent = playerScore)
    );
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    return (
      (results.textContent = `You win. Paper beats rock`),
      (playerScore += 1),
      (playerScoreLabel.textContent = playerScore)
    );
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    return (
      (results.textContent = `You lose. Scissors beats paper`),
      (cpuScore += 1),
      (cpuScoreLabel.textContent = cpuScore)
    );
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    return (
      (results.textContent = `You lose. Rock beats scissors`),
      (cpuScore += 1),
      (cpuScoreLabel.textContent = cpuScore)
    );
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    return (
      (results.textContent = `You win. Scissors beats paper`),
      (playerScore += 1),
      (playerScoreLabel.textContent = playerScore)
    );
  } else {
    return (results.textContent = "Error");
  }
};

const scoreTracker = () => {
  if (playerScore === 5) {
    disableSelectionButtons();
    return (results.textContent = "Player wins!");
  } else if (cpuScore === 5) {
    disableSelectionButtons();
    return (results.textContent = "Computer wins!");
  }
};

const disableSelectionButtons = () => {
  rockButton.classList.add("hidden");
  paperButton.classList.add("hidden");
  scissorsButton.classList.add("hidden");
  replayButton.classList.remove("hidden");
};

const replayGame = () => {
  replayButton.classList.add("hidden");
  rockButton.classList.remove("hidden");
  paperButton.classList.remove("hidden");
  scissorsButton.classList.remove("hidden");

  results.textContent = "Rock, Paper, Scissors, Shoot!";

  cpuScore = 0;
  cpuScoreLabel.textContent = cpuScore;

  playerScore = 0;
  playerScoreLabel.textContent = playerScore;
};

rockButton.addEventListener("click", () => {
  console.log(playRound("rock"));
  scoreTracker();
});

paperButton.addEventListener("click", () => {
  console.log(playRound("paper"));
  scoreTracker();
});

scissorsButton.addEventListener("click", () => {
  console.log(playRound("scissors"));
  scoreTracker();
});

replayButton.addEventListener("click", replayGame);
