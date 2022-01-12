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
