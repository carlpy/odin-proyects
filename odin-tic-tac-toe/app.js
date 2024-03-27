// DOM elements
const symbolSelection = document.querySelector(".symbol-selection");
const gameBoard = document.querySelectorAll(".game-board div");
const winMsg = document.querySelector('.winner-msg');

const board = ["", "", "", "", "", "", "", "", ""];
let symbol = 'O';
let winner = false;

function startGame() {
  let nMoves = 0;

  for (let i = 0; i < gameBoard.length; i++) {
    gameBoard[i].addEventListener("click", (e) => {
      if (!winner && nMoves <= 9) {
        if (!gameBoard[i].textContent != "") {
          e.target.textContent = symbol;
          board[i] = symbol;
          nMoves++;
          winner = checkWinner(board, symbol);
          if (winner) { winMsg.textContent = `the winner is: ${symbol}`; }
          changeSymbol();
        }
      }

      if (nMoves >= 9) { console.log("it's a tie"); }
    });
  }
}

function changeSymbol() {
  symbol = symbol === "X" ? "O" : "X";
}

function checkWinner(board, symbol) {
  if ((board[0] == symbol && board[1] == symbol && board[2] == symbol) ||
    (board[3] == symbol && board[4] == symbol && board[5] == symbol) ||
    (board[6] == symbol && board[7] == symbol && board[8] == symbol) ||
    (board[0] == symbol && board[3] == symbol && board[6] == symbol) ||
    (board[1] == symbol && board[4] == symbol && board[7] == symbol) ||
    (board[2] == symbol && board[5] == symbol && board[8] == symbol) ||
    (board[0] == symbol && board[4] == symbol && board[8] == symbol) ||
    (board[2] == symbol && board[4] == symbol && board[6] == symbol)) {
    return true;
  }
  return false;
}

startGame();
 