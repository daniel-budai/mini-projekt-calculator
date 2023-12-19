let firstNumber: number;
let secondNumber: number; // Variablerna för input av användaren

const buttonElement = document.querySelector(".button") as HTMLButtonElement; // hämta html button med dom
buttonElement.addEventListener("click", calculate); // listener på knapp klickas, kommer funktionen att köras.
const screenElement = document.querySelector(".screens") as HTMLDivElement; // hämta html med dom, visa resultatet

function calculate(): void {
  firstNumber = parseFloat((document.getElementById("first-input") as HTMLInputElement).value);
  secondNumber = parseFloat((document.getElementById("second-input") as HTMLInputElement).value);
  const result: number = firstNumber + secondNumber;
  screenElement.textContent = result.toFixed(2);
}
