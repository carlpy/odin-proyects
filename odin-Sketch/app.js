// DOM nodes
const grid = document.querySelector(".grid");
const colorsBtns = document.querySelectorAll("[data-color]");
const colorInp = document.querySelector("#head");
// DOM nodes

// Starter variables
let currentGrid = 16;
let defaultMode = "color";
let currentColor = colorInp.value;
// Starter variables

document.addEventListener("DOMContentLoaded", setGridSize(currentGrid));

colorInp.addEventListener("change", (e) => {
  currentColor = e.target.value;
  defaultMode = "color";
});

function changeBG(e) {
  if (defaultMode === "rainbow") {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    e.target.style.backgroundColor = `rgb(${r},${g},${b})`;
  }

  if (defaultMode === "color") e.target.style.backgroundColor = currentColor;
}

colorsBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn.dataset.color === "random") defaultMode = "rainbow"; 
    if (btn.dataset.color === "clear") clearGrid(); 
    
    if (btn.dataset.color === "dimensions") {
      currentGrid = parseInt(prompt("ingrese el nueo numero de grilla"));
      setGridSize(currentGrid);
    }
  });
});

function clearGrid() {
  [...grid.children].forEach((div) => (div.style.backgroundColor = "#fff"));
}

function setGridSize(size) {
  clearGrid();
  grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  for (let i = 0; i < size * size; i++) {
    const divElement = document.createElement("div");
    divElement.addEventListener("click", changeBG);
    divElement.addEventListener("mouseover", changeBG);
    grid.appendChild(divElement);
  }
}
