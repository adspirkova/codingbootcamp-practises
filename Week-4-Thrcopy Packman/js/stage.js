const TILE_SIZE = 85;

class Stage {
    constructor(width,height){
        this.width=width;
        this.height=height;
      }

    render() {
      this.element = document.createElement('div');
      this.element.className = 'stage';
      this.element.style.width = TILE_SIZE * this.width + 'px';
      this.element.style.height = TILE_SIZE * this.height + 'px';
      return this.element;
    }

    mount (parent){
      parent.appendChild(this.render());
    }
}
