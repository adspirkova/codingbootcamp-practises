/* STAGE 1 */
// let dice = null;

// const roll= () => {
//     if (dice < 6) {
//         dice ++;
//         document.getElementById("side").className = 'img' + Number(dice);
//     } else {
//         dice = 1;
//         document.getElementById("side").className = 'img' + Number(dice);
//     }
// };


// document.addEventListener('DOMContentLoaded', () => {
//     const Click = document.querySelector('#side');
//     Click.addEventListener('click', roll);
// });


/* STAGE 2 */

let dice = null;

const roll= () => {
    dice = Math.floor(1 + Math.random()* 6);
    document.getElementById("side").className = 'img' + Number(dice);
    dice = 0;
};


document.addEventListener('DOMContentLoaded', () => {
    const Click = document.querySelector('#side');
    Click.addEventListener('click', roll);
});