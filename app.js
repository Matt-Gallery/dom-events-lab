/*-------------------------------- Constants --------------------------------*/
const buttons = document.querySelectorAll('.button');
const display = document.querySelector('.display');
const clearButton = document.querySelector('.clear');
const equalsButton = document.querySelector('.equals');

/*-------------------------------- Variables --------------------------------*/
let currentValue = "";
let previousValue = "";
let operator = "";

/*----------------------------- Event Listeners -----------------------------*/

buttons.forEach((button) => {
    button.addEventListener('click', (event) => {
        display.textContent = previousValue += event.target.innerText
        console.log(event.target.innerText);
    });
  });
 
equalsButton.addEventListener('click', () => {
    const expression = display.textContent;
    if (/[0-9+\-*/]*$/.test(expression)) {
      display.textContent = eval(expression);
    } else {
      display.textContent = "Error";
 }
});

clearButton.addEventListener('click', () => {
         previousValue = "";
         display.textContent = "";
});

/*-------------------------------- Functions --------------------------------*/