let score=0;

document.addEventListener('DOMContentLoaded', ()=>{
const game = document.querySelector('.game');
const game1 = new Game (0);
game1.mount(game);

const chip = new Chips (1, 'blue', '2em', '8em');
const chip2 = new Chips (3, 'green', '6em', '9em');
const chip3 = new Chips (5, 'red', '16em', '19em');

chip.mount(game1.element);
chip2.mount(game1.element);
chip3.mount(game1.element);

})


