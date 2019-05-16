'use strict';

console.log('It works!');

let result = 0;
let operation = null;

const updateResult = () => {
  const resultElm = document.querySelector('.calc__result');
  resultElm.textContent = result;
}

const clearInput = () => {
  const inputElm = document.querySelector('.calc__input');
  inputElm.value = '0';
}

// Operations 
const plus = () => {
  equals();
  operation = '+';
};

const minus = () => {
    equals();
    operation = '-';
};

const multi = () => {
    equals();
    operation = '*';
};

const div = () => {
    equals();
    operation = '/';
};

const clear = () => {
  result = 0;
  updateResult();
  clearInput();
};

const equals = () => {
  const inputElm = document.querySelector('.calc__input');
  const number = parseInt(inputElm.value);

  switch(operation) {
    case '+':
      result += number;
      break;
    case '-':
      result -= number;
      break;
    case '*':
      result *= number;
      break;
    case '/':
      result /= number;
      break;
    default:
      result = number;
      break;
  }

  updateResult();
  clearInput();
  operation = null;
}

const onDigit = (event) => {
    console.log(event.target.textContent)
}

for (let i=0; i<10; i++) {
    const btn = document.querySelector('#btn-equals');
    btn.addEventListener('click', onDigit);
}

// DOM CONTENT LOADER
document.addEventListener('DOMContentLoaded', () => {
  const btnPlus = document.querySelector('#btn-plus');
  btnPlus.addEventListener('click', plus);

  const btnMinus = document.querySelector('#btn-minus');
  btnMinus.addEventListener('click', minus);

  const btnMulti = document.querySelector('#btn-multi');
  btnMulti.addEventListener('click', multi);

  const btnDiv = document.querySelector('#btn-div');
  btnDiv.addEventListener('click', div);

  const btnClear = document.querySelector('#btn-clear');
  btnClear.addEventListener('click', clear);

  const btnEquals = document.querySelector('#btn-equals');
  btnEquals.addEventListener('click', equals);

});






/* const graphicalkeyboard = () => {
    const numkeybElm = document.querySelector('.calc__num');
    const gnumber = parseInt(numkeybElm.value);
    console.log('It is not working!');
    switch(gnumber) {
        case 1:
          result = 1;
          break;
        case 2:
          result -= number;
          break;
        case 3:
          result *= number;
          break;
        case 4:
          result /= number;
          break;
        case 5:
          result /= number;
          break;
        case 6:
          result /= number;
          break;
        case 7:
          result /= number;
          break;
        case 8:
          result /= number;
          break;
        case 9:
          result /= number;
          break;
        default:
          result = number;
          break;
      }
      updateResult();
}

const btnNo = document.querySelector('#btn-num0');
btnNo.addEventListener('click', graphicalkeyboard);

const btnNo1 = document.querySelector('#btn-num1');
btnNo1.addEventListener('click', graphicalkeyboard);

const btnNo2 = document.querySelector('#btn-num2');
btnNo2.addEventListener('click', graphicalkeyboard);

const btnNo3 = document.querySelector('#btn-num3');
btnNo3.addEventListener('click', graphicalkeyboard);

const btnNo4 = document.querySelector('#btn-num4');
btnNo4.addEventListener('click', graphicalkeyboard);

const btnNo5 = document.querySelector('#btn-num5');
btnNo5.addEventListener('click', graphicalkeyboard);

const btnNo6 = document.querySelector('#btn-num6');
btnNo6.addEventListener('click', graphicalkeyboard);

const btnNo7 = document.querySelector('#btn-num7');
btnNo7.addEventListener('click', graphicalkeyboard);

const btnNo8 = document.querySelector('#btn-num8');
btnNo8.addEventListener('click', graphicalkeyboard);

const btnNo9 = document.querySelector('#btn-num9');
btnNo9.addEventListener('click', graphicalkeyboard);
 */