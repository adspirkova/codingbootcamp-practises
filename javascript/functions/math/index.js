/* 1. 

let number = parseInt(prompt('take number'));

function square(number) {
    return number * number;
}

console.log('Your squared number ' + number + ' is ' + square(number));

const square = (number) => {
    return number **2;
};


*/
/* 2. */
const a = parseInt(prompt('take a'));
const b = parseInt(prompt('take b'));

function square(a,b) {
    return (a * a ) + (b * b);
}
// const square = (a,b) => {
//     return (a * a ) + (b * b);
// };

function hypotenuse(square) {
    return Math.round(Math.sqrt((square(a,b))));
}

// const hypotenuse = (a,b) => {
//     return Math.round(Math.sqrt(square(a) + square (b)));
// };

console.log('Your result is ' + hypotenuse(square))