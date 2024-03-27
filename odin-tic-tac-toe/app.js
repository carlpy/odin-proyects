// DOM elements
const symbolSelection = document.querySelector(".symbol-selection");
const gameBoard = document.querySelectorAll(".game-board div");
const winMsg = document.querySelector(".winner-msg");

const winningCombinations = [ [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];

let symbol = "O";
let winner = false;

gameBoard.forEach((cell) => {
  cell.addEventListener("click", changeBoard, { once: true });
});

function changeBoard(e) {
  const cell = e.target;
  const id = cell.dataset.id;

  if (!winner) {
    if (!gameBoard[id].textContent != "") {
      cell.textContent = symbol;

      winner = checkWinner(symbol);

      if (winner) { winMsg.textContent = `the winner is: ${symbol}`; }
    }
    changeSymbol();
  }

  if (checkDraw()) { winMsg.textContent = "it's a tie"; }
}

function checkDraw() {
  return (
    Array.from(gameBoard).every((item) => item.textContent !== "") && !winner
  );
}

function changeSymbol() { symbol = symbol === "X" ? "O" : "X"; }

function checkWinner(symbol) {
  const board = Array.from(gameBoard);

  return winningCombinations.some((combinations) => {
    return combinations.every((id) => board[id].textContent === symbol);
  });
}