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
    console.log("It's a tie");
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    console.log("You lose. Paper beats rock");
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    console.log("You win. Rock beats scissors");
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    console.log("You win. Paper beats rock");
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    console.log("You lose. Scissors beats paper");
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    console.log("You lose. Rock beats scissors");
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    console.log("You win. Scissors beats paper");
  } else {
    console.log("Error");
  }
};
