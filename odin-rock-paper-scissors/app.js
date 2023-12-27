const btns = document.querySelectorAll(".choices-btns");

let pcPoints = 0;
let playerPoints = 0;
let timesPlayed = 0;
let winner;

btns.forEach((btn) =>
  btn.addEventListener("click", function executeBtn(e) {
    if (timesPlayed != 5) {
      console.log("player: " + getPlayerOption(e));
      console.log("this is the " + (timesPlayed + 1) + "th time");

      const roundWinner = playRockPaperScissors(getPlayerOption(e));
      if (roundWinner == "pc") { pcPoints++; } 
      else if (roundWinner == "player") { playerPoints++; }

      timesPlayed++;
      console.log(roundWinner);

      if (timesPlayed == 5) {
        if (pcPoints > playerPoints) { winner = "pc"; } 
        else if (playerPoints > pcPoints) { winner = "player"; } 
        else { winner = "no one (tie)"; }
        console.log(
          "the winner is: " +
            winner +
            `\nthe final score is player: ${playerPoints}\nthe final score PC is: ${pcPoints}`
        );
        btns.forEach((btn) => btn.removeEventListener("click", executeBtn));
      }
    }
  })
);

function playRockPaperScissors(playerChoice) {
  let pcChoice = getPCOption();

  if (
    (playerChoice == "rock" && pcChoice == "paper") ||
    (playerChoice == "paper" && pcChoice == "scissors") ||
    (playerChoice == "scissors" && pcChoice == "rock")
  ) {
    return "pc";
  } else if (
    (playerChoice == "rock" && pcChoice == "scissors") ||
    (playerChoice == "paper" && pcChoice == "rock") ||
    (playerChoice == "scissors" && pcChoice == "paper")
  ) {
    return "player";
  } else {
    return "tie";
  }
}

function getPlayerOption(event) {
  return event.target.dataset.item;
}

function getPCOption() {
  const options = ["rock", "paper", "scissors"];
  const randIndex = Math.floor(Math.random() * options.length);
  return options[randIndex];
}
 