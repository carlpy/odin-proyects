/* Rock paper & scissors

Game has to repeat 5 times, then pop up the winner

- player got to chose between the three options
  - you have to click an image that represents the object, 
  - then it triggers the event and set the value as the chosen

- then PC chooses randomly another option
  - use the math.Random() to get the random num from 1-3
*/
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

/* 

rock {
  r - r tie
  r - p lose
  r - s win
}

p {
  p - p tie
  p - s lose
  p - r win 
}

s {
  s - s tie
  s - r lose
  s - p win
}

*/

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
 