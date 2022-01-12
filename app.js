const computerPlay = (choice) => {
  let options = ["rock", "paper", "scissors"];

  option = Math.floor(Math.random(options) * 3 + 1);

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
  playerSelection = prompt("Enter Rock, Paper or Scissors!").toLowerCase();
  computerSelection = computerPlay();
  console.log(`computer: ${computerSelection}`);

  if (playerSelection === computerSelection) {
    return "It's a tie";
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    return "You lose. Paper beats rock";
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    return "You win. Rock beats scissors";
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    return "You win. Paper beats rock";
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    return "You lose. Scissors beats paper";
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    return "You lose. Rock beats scissors";
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    return "You win. Scissors beats paper";
  } else {
    return "Error";
  }
};

const game = () => {
  for (let i = 1; i <= 5; i++) {
    console.log(playRound());
  }
};
