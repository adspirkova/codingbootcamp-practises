

class Answer {
    constructor(title, text, vote, question) {
      this.title = title;
      this.text = text;
      this.vote = vote;
      this.question = question;
    }
    render(){
      this.element=document.createElement("div");
      this.element.innerHTML = (`
      <h4>${this.title}</h4>
      <p>${this.text}</p>
      
      <button id="upvote">+</button>
      <p id="vote">${this.vote}</p>
      <button id="downvote">-</button>
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