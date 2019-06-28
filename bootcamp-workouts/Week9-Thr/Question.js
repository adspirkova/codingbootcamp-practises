

class Question {
    constructor(title, text, vote, number) {
      this.title = title;
      this.text = text;
      this.vote = vote;
      this.number = number;
    }
    render(){
      this.element=document.createElement("div");
      this.element.className=`q${this.number} question`;
      this.element.innerHTML = (`
      <h2 class="title">${this.title}</h2>
      <p>${this.text}</p>
      
      <div class="votes">
        <button id="upvote">+</button>
        <p id="vote" class="counter">${this.vote}</p>
        <button id="downvote">-</button>
      </div>
      `);
      this.element.querySelector('#upvote').addEventListener('click', () => {
        this.upvote();
      });
      this.element.querySelector('#downvote').addEventListener('click', () => {
        this.downvote();
      });
      console.log(this.vote);
      return this.element;
      
    }
    mount(parent){
        parent.appendChild(this.render());
    }

    update(){
        this.element.querySelector('#vote').textContent=this.vote;
    }

    upvote(){
        this.vote++;
        this.update();
    }

    downvote(){
        this.vote--;
        this.update();
    }
} 