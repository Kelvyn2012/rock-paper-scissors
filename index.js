const choices = ["PAPER", "SCISSORS", "ROCK"];
const winners = [];
const round = 1;

// computer random output
function computerChoice() {
  let randomSelection = choices[Math.floor(Math.random() * choices.length)];
  return randomSelection;
}

// players validation
function playerchoice() {
  let input = prompt("Input PAPER,SCISSORS OR ROCK");
  while (input == null) {
    let input = prompt("Input PAPER,SCISSORS OR ROCK");
  }
  input = input.toUpperCase();
  let check = validateInput(input);
  while (check == false) {
    let input = prompt(
      "Type rock,paper or scissors. spellings needs to be correct,but capitalization is not nessasary"
    );
    while (input == null) {
      let input = prompt("Input PAPER,SCISSORS OR ROCK");
    }
    input = input.toUpperCase();
    check = validateInput(input);
  }
  return input;
}
function validateInput(choice) {
  return choices.includes(choice);
}

// Game logic
function declareWinner(choiceP, choiceC) {
  if (choiceP === choiceC) {
    return "TIE";
  } else if (
    (choiceP === "ROCK" && choiceC === "SCISSORS") ||
    (choiceP === "PAPER" && choiceC === "ROCK") ||
    (choiceP === "SCISSORS" && choiceC === "PAPER")
  ) {
    return "PLAYER";
  } else {
    return "COMPUTER";
  }
}
// NUMBER OF ROUNDS FOR GAME
function game() {
  for (let i = 1; i <= 5; i++) {
    playRound(i);
  }
  logWinner();
}

function playRound(round) {
  const playerSelection = playerchoice();
  const computerSelection = computerChoice();
  const winner = declareWinner(playerSelection, computerSelection);
  winners.push(winner);
  logRound(playerSelection, computerSelection, winner, round);
}
function logWinner() {
  let playerWins = winners.filter((item) => item === "PLAYER").length;
  let computerWins = winners.filter((item) => item === "COMPUTER").length;
  const ties = winners.filter((item) => item === "TIE").length;
  console.log("RESULT:");
  console.log("player wins:", playerWins);
  console.log("computer wins:", computerWins);
  console.log("Ties:", ties);
}

function logRound(playerchoice, computerChoice, winner, round) {
  console.log("Round:", round);
  console.log("Player chose", playerchoice);
  console.log("computer chose", computerChoice);
  //   console.log(winner, "won the round");
  if (winner === "TIE") {
    console.log("ITS A TIE");
  } else {
    console.log(winner, "won the round");
  }
  console.log(".....................................");
}
