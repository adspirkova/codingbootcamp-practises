
class Pacman {
  constructor(stage, name,score,pacX,pacY,pacMouth,facing, gender, skintone){
    this.stage=stage
    this.name=name;
    this.score=score;
    this.pacX=pacX;
    this.pacY=pacY;
    this.pacMouth='closed';
    this.facing=facing;
    this.gender=gender;
    this.skintone=skintone;
  }

  render() {
    this.element = document.createElement('div');
    this.element.className = 'pac';
    this.element.textContent = `${this.name}: ${this.score}`;
    return this.element;
  }
  
  mount (parent){
    parent.appendChild(this.render());
    this.update();
  }
  
  update(){
    this.appearance();
    this.element.style.left = this.pacX * TILE_SIZE + 'px';
  
    this.element.style.top = this.pacY * TILE_SIZE + 'px';
  
    this.element.style.backgroundPositionY = this.facing * TILE_SIZE +'px'

    if(this.pacMouth === 'closed'){
      this.element.style.backgroundPositionX = '0px';
    } else {
      this.element.style.backgroundPositionX = TILE_SIZE + 'px';
    } 
  }

  move(event) {
  switch (event.code) {
    case 'ArrowRight':
      if(this.pacX < this.stage.width - 1) {
      this.pacX += 1;
      this.mouth();
      this.faceposition();
    } break;
    case 'ArrowLeft':
      if(this.pacX > 0){
      this.pacX -= 1;
      this.mouth();
      this.faceposition();
    } break;
    case 'ArrowDown':
    if(this.pacY < this.stage.height - 1) {
      this.pacY += 1;
      this.mouth();
      this.faceposition();
    }  break;
    case 'ArrowUp':
    if(this.pacY > 0) {
      this.pacY -= 1;
      this.mouth();
      this.faceposition();
    }  break;
  } 
  }

  mouth() {
    if(this.pacMouth === 'closed') {
      this.pacMouth = 'opened';
    } else {
      this.pacMouth = 'closed';
    }
  this.update();
  }

  faceposition () {
  switch (event.code) {
    case 'ArrowRight':
      this.facing= 0;
      break;
    case 'ArrowLeft':
      this.facing= 3;
      break;
    case 'ArrowDown':
      this.facing= 2;
      break;
    case 'ArrowUp':
      this.facing= 1;
      break;
  } this.update();
  }

  appearance () {
    switch (this.gender) {
      case 'boy':
      this.element.style.backgroundImage = 'url(img/pac'+this.gender+'-active-'+this.skintone+'.png)';
        break;
      case 'girl':
      this.element.style.backgroundImage = 'url(img/pac'+this.gender+'-active-'+this.skintone+'.png)'
        break;
    };
    }
}


// Also make sure that your pacman cannot escape from the stage.

// Add a property gender and skinTone to your pacman component so that we can also have girls and black people in the field. Create an array of differently styled pacmen in the game and mount all of them to the playing field. But now we have a problem which pacman should be controlled by the keyboard. At first, just use first pacman in the array.