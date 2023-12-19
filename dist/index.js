let firstNumber;
let secondNumber; //Variablerna för input av användaren

const buttonElement = document.querySelector(".button"); //hämta html button med dom
buttonElement.addEventListener("click", calculate); // listener på knapp klickas, kommer funktionen  att köras.
const screenElement = document.querySelector(".screens"); //hämta html med dom, visa resultatet

function calculate() {
  firstNumber = parseFloat(document.getElementById("first-input").value);
  secondNumber = parseFloat(document.getElementById("second-input").value);
  const result = firstNumber + secondNumber;
  screenElement.textContent = result.toFixed(2);
}
