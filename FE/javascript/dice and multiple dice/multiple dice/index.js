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

let dice = [0,1,2,3,4,5];

const y = ['position1', 'position2', 'position3', 'position4', 'position5', 'position6']

const roll = (x,y) => {
    dice[x] = Math.floor(1 + Math.random()* 6);
    document.getElementById(y).className = 'img' + Number(dice[x]);
    dice[x] = 0;
};

const rollall = (x,y) => {
    for (i=0; i<y.length; i++){
    dice[x] = Math.floor(1 + Math.random()* 6);
    document.getElementById(y[i]).className = 'img' + Number(dice[x]);
    }
    dice[x] = 0;
};


document.addEventListener('DOMContentLoaded', () => {


    const Click = document.querySelector('#position1');
    Click.addEventListener('click', () => roll(dice,y[0]));

    const Click2 = document.querySelector('#position2');
    Click2.addEventListener('click', () => roll(dice,y[1]));

    const Click3 = document.querySelector('#position3');
    Click3.addEventListener('click', () => roll(dice,y[2]));

    const Click4 = document.querySelector('#position4');
    Click4.addEventListener('click', () => roll(dice,y[3]));

    const Click5 = document.querySelector('#position5');
    Click5.addEventListener('click', () => roll(dice,y[4]));

    const Click6 = document.querySelector('#position6');
    Click6.addEventListener('click', () => roll(dice,y[5]));

    const Click7 = document.querySelector('button');
    Click7.addEventListener('click', () => {rollall(dice,y)});
});