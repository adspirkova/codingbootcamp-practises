
class ProgressBar {
    constructor (value, max) {
        this.value = value;
        this.max = max;
    }

    increment () {
        if (this.value < this.max) {
        this.value++;
        }
    }

    decrement () {
        if (this.value > 0) {
        this.value--;
        }
    }
}


const bar = new ProgressBar(3,33);

const add = () => {
    bar.increment();
    update();
}


const minus = () => {
    bar.decrement();
    update();
};

const update = () => {
const upd = document.querySelector('#counter');
upd.textContent = bar.value;
const upd2 = document.querySelector('#maximum');
upd2.textContent = bar.max;
const spread = document.querySelector('#knob');
spread.style.width = (bar.value*100)/bar.max + '%';
}

document.addEventListener('DOMContentLoaded', ()=>{
    update();
    const plusClick = document.querySelector('#plus');
    plusClick.addEventListener('click', add);

    const minusClick = document.querySelector('#minus');
    minusClick.addEventListener('click', minus);
});
