const rockButton = document.querySelector(".rock");
const paperButton = document.querySelector(".paper");
const scissorsButton = document.querySelector(".scissors");
const results = document.querySelector(".results h2");
let playerScoreLabel = document.querySelector("#p-score");
let cpuScoreLabel = document.querySelector("#cpu-score");

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
  console.log(`computer: ${computerSelection}`);

  if (playerSelection === computerSelection) {
    return (results.textContent = "It's a tie");
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    return (results.textContent = "You lose. Paper beats rock");
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    return (results.textContent = "You win. Rock beats scissors");
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    return (results.textContent = "You win. Paper beats rock");
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    return (results.textContent = "You lose. Scissors beats paper");
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    return (results.textContent = "You lose. Rock beats scissors");
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    return (results.textContent = "You win. Scissors beats paper");
  } else {
    return (results.textContent = "Error");
  }
};

const scoreTracker = () => {};

rockButton.addEventListener("click", () => {
  console.log(playRound("rock"));
});

paperButton.addEventListener("click", () => {
  console.log(playRound("paper"));
});

scissorsButton.addEventListener("click", () => {
  console.log(playRound("scissors"));
});
