let too = document.getElementById("bruh");
let num1 = "",
  num2 = "",
  result = "",
  symbol = "";

function temdeg(x) {
  symbol = x;
}
function toonuud(x) {
  if (symbol == "") {
    num1 += x;
    too.innerText = num1;
  } else {
    num2 += x;
    too.innerText = num2;
  }
}
function add(num1, num2) {
  return parseFloat(num1) + parseFloat(num2);
}
function subtract(num1, num2) {
  return parseFloat(num1) - parseFloat(num2);
}
function multiply(num1, num2) {
  return parseFloat(num1) * parseFloat(num2);
}
function divide(num1, num2) {
  return parseFloat(num1) / parseFloat(num2);
}
function omegadivide(num1, num2) {
  return parseFloat(num1) % parseFloat(num2);
}
function hariu() {
  if (symbol != "") {
    switch (symbol) {
      case "+":
        result = add(num1, num2);
        too.innerText = result;
        symbol = "";
        num1 = result;
        num2 = "";
        break;
      case "-":
        result = subtract(num1, num2);
        too.innerText = result;
        symbol = "";
        num1 = result;
        num2 = "";
        break;
      case "*":
        result = multiply(num1, num2);
        too.innerText = result;
        symbol = "";
        num1 = result;
        num2 = "";
        break;
      case "/":
        result = divide(num1, num2);
        too.innerText = result;
        symbol = "";
        num1 = result;
        num2 = "";
        break;
      case "%":
        result = omegadivide(num1, num2);
        too.innerText = result;
        symbol = "";
        num1 = result;
        num2 = "";
        break;
    }
  }
}
function stop() {
  num1 = "";
  num2 = "";
  symbol = "";
  result = "";
  too.innerText = "0";
}
function reverse() {
  if (symbol == "") {
    num1 = num1 * -1;
    too.innerText = num1;
  } else {
    num2 = num2 * -1;
    too.innerText = num2;
  }
}
function tseg(x) {
  if (symbol == "" && num1.includes(".") == false) {
    num1 += x;
    too.innerText = num1;
  } else if (
    (symbol == "*" ||
      symbol == "/" ||
      symbol == "+" ||
      symbol == "-" ||
      symbol == "%") &&
    num2.includes(".") == false
  ) {
    num2 += x;
    too.innerText = num2;
  }
}
