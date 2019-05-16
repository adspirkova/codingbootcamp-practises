let dice = Math.floor(1 + Math.random() * 6);
let limit = parseInt(prompt('Insert limit value'));
let dice2 = Math.floor(1 + Math.random() * limit);

console.log('This is your number ' + dice2);


let min = parseInt(prompt('Insert min value'));
let max = parseInt(prompt('Insert max value'));
let MinMax= Math.floor(min + Math.random() * max);
console.log('This is your new number ' + MinMax);

/* Template for single output */
let html = `<div>${MinMax}</div>`;
console.log(html);
/*  */

