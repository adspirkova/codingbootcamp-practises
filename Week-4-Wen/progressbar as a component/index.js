
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

    render () {
        this.element = document.createElement('div');
        this.element.innerHTML = (
        `<div id="label" class="label">
          <span id="counter">${this.value}</span>/
          <span id="maximum">${this.max}</span>
        </div>
        <div class="progress">
          <div id="minus" class="btn-minus"></div>
          <div class="bar">
            <div id="knob" class="knob"></div>
          </div>
          <div id="plus" class="btn-plus"></div>
        </div>`
        );
        const plusClick = this.element.querySelector('#plus');
        plusClick.addEventListener('click', ()=> {
            this.increment();
            this.update();
        });    
        const minusClick = this.element.querySelector('#minus');
        minusClick.addEventListener('click', () => {
            this.decrement();
            this.update();
        });
        return this.element;
    }

    mount (parent){
        parent.appendChild(this.render());
        this.update();
    }
    update (){
        const upd = this.element.querySelector('#counter');
        upd.textContent = this.value;
        const upd2 = this.element.querySelector('#maximum');
        upd2.textContent = this.max;
        const spread = this.element.querySelector('#knob');
        spread.style.width = (this.value*100)/this.max + '%';
    }
}


document.addEventListener('DOMContentLoaded', ()=>{
    const app = document.querySelector('#app');

    const bar = new ProgressBar(2,50);
    bar.mount(app);

    const bar2 = new ProgressBar(3,80);
    bar2.mount(app);

    const bar3 = new ProgressBar(6,100);
    bar3.mount(app);
});
