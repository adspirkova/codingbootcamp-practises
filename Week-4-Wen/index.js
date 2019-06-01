let progress = 2;

const maximum = 35;

const add = () => {
    if (progress < maximum) {
    progress++};
    update();
}


const minus = () => {
    if (progress >0){
    progress--};
    update();
};

const update = () => {
const upd = document.querySelector('#counter');
upd.textContent = progress;
const upd2 = document.querySelector('#maximum');
upd2.textContent = maximum;
const spread = document.querySelector('#knob');
spread.style.width = (progress*100)/maximum + '%';
}

document.addEventListener('DOMContentLoaded', ()=>{
    update();
    const plusClick = document.querySelector('#plus');
    plusClick.addEventListener('click', add);

    const minusClick = document.querySelector('#minus');
    minusClick.addEventListener('click', minus);
});
