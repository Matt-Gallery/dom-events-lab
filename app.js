
// /*-------------------------------- Constants --------------------------------*/
// const buttons = document.querySelectorAll('.button');
// const display = document.querySelector('.display');
// const clearButton = document.querySelector('.clear');
// const equalsButton = document.querySelector('.equals');

// /*-------------------------------- Variables --------------------------------*/
// let currentValue = "";
// let previousValue = "";
// let operator = "";

// /*----------------------------- Event Listeners -----------------------------*/
// buttons.forEach((button) => {
//     button.addEventListener('click', handleButtonClick);
// });

// clearButton.addEventListener('click', clear);
// equalsButton.addEventListener('click', calculate);

// /*-------------------------------- Functions --------------------------------*/
// function handleButtonClick(event) {
//     const value = event.target.innerText;
//     if (event.target.classList.contains('number')) {
//         appendNumber(value);
//     } else if (event.target.classList.contains('operator')) {
//         setOperator(value);
//     }
// }

// function appendNumber(number) {
//     if (number === '0' && currentValue === '0') return;
//     currentValue = currentValue === '0' ? number : currentValue + number;
//     updateDisplay();
// }

// function setOperator(op) {
//     if (currentValue === '') return;
//     if (previousValue !== '') {
//         calculate();
//     }
//     operator = op;
//     previousValue = currentValue;
//     currentValue = '';
// }

// function clear() {
//     currentValue = '';
//     previousValue = '';
//     operator = '';
//     updateDisplay();
// }

// function calculate() {
//     if (previousValue === '' || currentValue === '') return;
//     let result;
//     const prev = parseFloat(previousValue);
//     const current = parseFloat(currentValue);
//     switch (operator) {
//         case '+':
//             result = prev + current;
//             break;
//         case '-':
//             result = prev - current;
//             break;
//         case '*':
//             result = prev * current;
//             break;
//         case '/':
//             result = prev / current;
//             break;
//         default:
//             return;
//     }
//     currentValue = result.toString();
//     operator = '';
//     previousValue = '';
//     updateDisplay();
// }

// function updateDisplay() {
//     display.textContent = currentValue || '0';
// }

// updateDisplay();

/*---------------------------------------------------------------------------*/


/*-------------------------------- Constants --------------------------------*/
const buttons = document.querySelectorAll('.button');
const display = document.querySelector('.display');
const clearButton = document.querySelector('.clear');
const equalsButton = document.querySelector('.equals');

/*-------------------------------- Variables --------------------------------*/
let currentValue = "";
let previousValue = "";
let operator = "";
let output = "";

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