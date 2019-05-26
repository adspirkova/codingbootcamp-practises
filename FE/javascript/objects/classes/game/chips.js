
class Chips {
    constructor(numbers, color, positionX, positionY) {
        this.numbers = numbers,
        this.color = color,
        this.positionX = positionX,
        this.positionY = positionY
    }

    render () {
        this.element = document.createElement('div');
        this.element.innerHTML = (`
        <div>
        <div class= "object"
        style="background-color:${this.color}; left: ${this.positionX}; top: ${this.positionY}"> 
        ${this.numbers} </div>
        </div>`);
        return this.element
    }

    mount (parent) {
        parent.appendChild(this.render());
        this.update(parent);
    }
    update(){
        this.element.querySelector('.object').addEventListener('click',()=>{ this.delete(parent)}); 
    }
    
    delete (parentNode) {
        this.element.parentNode.removeChild(this.element);
    }
}
