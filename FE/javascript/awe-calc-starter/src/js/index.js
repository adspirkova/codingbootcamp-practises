

let result = null;
let operation = null;
let memory = 0;


const updateResult = () => {
  const resultElm = document.querySelector('.calc__result');
  resultElm.textContent = result;
}

const updateMemory = () => {
  const memoryElm = document.querySelector('.calc__result');
  memory = parseInt(memoryElm.textContent)
  console.log(memory);
}

const clearInput = () => {
  const inputElm = document.querySelector('.calc__input');
  inputElm.value = '0';
}

const clearMemory = () => {
  memory = 0;
}

const plusMemory = () => {
  const inputElm = document.querySelector('.calc__input');
  const number = parseFloat(inputElm.value);
  memory += number;
  result = memory;
  updateResult();
  updateMemory();
  clearInput();
}

const minusMemory = () => {
  const inputElm = document.querySelector('.calc__input');
  const number = parseFloat(inputElm.value);
  memory -= number;
  result = memory
  updateResult();
  updateMemory();
  clearInput();
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
  const number = parseFloat(inputElm.value);

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

const graphicalkeyboard = (btn) => {
  let numkeybElm = document.querySelector(btn);
  let grapnumber = numkeybElm.value;

  let inputElm = document.querySelector('.calc__input');
  console.log(inputElm.value);
  inputElm.value += grapnumber;
  
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


  const btnzero = document.querySelector('#btn-0');
  btnzero.addEventListener('click', ()=>{graphicalkeyboard('#btn-0')});

  const btnone = document.querySelector('#btn-1');
  btnone.addEventListener('click', ()=>{graphicalkeyboard('#btn-1')});

  const btntwo = document.querySelector('#btn-2');
  btntwo.addEventListener('click', ()=>{graphicalkeyboard('#btn-2')});

  const btnthree = document.querySelector('#btn-3');
  btnthree.addEventListener('click', ()=>{graphicalkeyboard('#btn-3')});

  const btnfour = document.querySelector('#btn-4');
  btnfour.addEventListener('click', ()=>{graphicalkeyboard('#btn-4')});

  const btnfive = document.querySelector('#btn-5');
  btnfive.addEventListener('click', ()=>{graphicalkeyboard('#btn-5')});

  const btnsix = document.querySelector('#btn-6');
  btnsix.addEventListener('click', ()=>{graphicalkeyboard('#btn-6')});

  const btnseven = document.querySelector('#btn-7');
  btnseven.addEventListener('click', ()=>{graphicalkeyboard('#btn-7')});
  
  const btneight = document.querySelector('#btn-8');
  btneight.addEventListener('click', ()=>{graphicalkeyboard('#btn-8')});

  const btnnine = document.querySelector('#btn-9');
  btnnine.addEventListener('click', ()=>{graphicalkeyboard('#btn-9')});

  const btncomma = document.querySelector('#btn-comma');
  btncomma.addEventListener('click', ()=>{graphicalkeyboard('#btn-comma')});

  const btnmemplus = document.querySelector('#btn-memory-plus');
  btnmemplus.addEventListener('click', plusMemory);

  const btnmemc = document.querySelector('#btn-memory-c');
  btnmemc.addEventListener('click', clearMemory);

  const btnmem = document.querySelector('#btn-memory');
  btnmem.addEventListener('click', updateMemory);

  const btnmemminus = document.querySelector('#btn-memory-minus');
  btnmemminus.addEventListener('click', minusMemory);
});
