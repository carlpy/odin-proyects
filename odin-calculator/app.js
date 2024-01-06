// DOM elements
const calcScreen = document.querySelector(".display");
const btns = document.querySelectorAll(".buttons > button");
const operatorBtns = document.querySelectorAll("[data-operator]");
// -- DOM elements

btns.forEach((btn) => btn.addEventListener("click", getBtnsValue));

let screenTxt = document.querySelector(".display").textContent;
let result = 0;
let numsArr = [];
let operatione;

const specialKeys = ["AC", "C", "="];


function getBtnsValue(e) {
  calcScreen.textContent = "";
  const key = e.target;

  if (key.textContent === "AC") screenTxt = "";
  if (key.textContent === "C") screenTxt = screenTxt.slice(0, -1);
  if (specialKeys.indexOf(key.textContent) === -1) screenTxt += key.textContent;

  if (key.dataset.operator && screenTxt !== "") doOperations(e, screenTxt);

  calcScreen.textContent = screenTxt;
}

function doOperations(e, num) {
  const key = e.target.dataset.operator;
  numsArr.push(parseInt(num));

  if (key === "divide") operatione = "/"; 
  if (key === "multiply") operatione = "x"; 
  if (key === "substract") operatione = "-";  
  if (key === "add") operatione = "+"; 

  screenTxt = "";

  if (key === "equal" && numsArr.length !== 0) {
    let [num1, num2] = (numsArr.length > 2) ? numsArr.slice(numsArr.length - 2) : numsArr;
    let result = 0;

    if(operatione === "/" ) result = num1 / num2;
    if(operatione === "x" ) result = num1 * num2;
    if(operatione === "-" ) result = num1 - num2;
    if(operatione === "+" ) result = num1 + num2;

    screenTxt = result;
  } 

  calcScreen.textContent = screenTxt;
}