const computerPlay = (choice) => {
  let options = ["rock", "paper", "scissors"];

  option = Math.floor(Math.random(options) * 3 + 1);

  if (option === 1) {
    choice = "rock";
  } else if (option === 2) {
    choice = "paper";
  } else if (option === 3) {
    choice = "scissors";
  } else {
    console.log("An error occured");
  }
  return choice;
};
