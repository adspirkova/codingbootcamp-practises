
class Game {
    constructor (score) {
        this.score = score;
    }

    render () {
        this.element = document.createElement('div');
        this.element.innerHTML =(
        `<div>
            <p class="score" >Score: ${this.score}</p>
        </div>`
        );
        return this.element;
    }

    mount (parent) {
    parent.appendChild(this.render());
    this.update();
    }

    addChip(child,parent) {
        child.mount(parent)
    }
    
    update() {
        this.score;
        /* this.score += this.numbers; */
        console.log(this.score);
        this.element.querySelector('.score').textContent = `Score: ${this.score}`;
    }


}