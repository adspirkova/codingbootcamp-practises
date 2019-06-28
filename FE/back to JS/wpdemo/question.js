import Answer from './answer.js';

export default class Question {
  constructor(title, body, answers) {
    this.title = title;
    this.body = body;
    this.votes = 13;
    this.answers = answers;
  }

  upvote() {
    this.votes++;
    this.update();
  }

  downvote() {
    this.votes--;
    this.update();
  }

  render() {
    const element = document.createElement('div');
    element.innerHTML = `
      <div class="question">
        <div class="votes">
          <button class="btn-upvote">+</button>
          <div class="counter">${this.votes}</div>
          <button class="btn-downvote">-</button>
        </div>
        <div class="content">
          <div class="title">${this.title}</div>
          <div class="body">${this.body}</div>
        </div>
      </div>
      <div class="answers"></div>
    `;

    element.querySelector('.btn-upvote').addEventListener(
      'click', this.upvote.bind(this)
    );
    element.querySelector('.btn-downvote').addEventListener(
      'click', this.downvote.bind(this)
    );

    const result = this.answers.map(answer => {
      return new Answer(answer.user, answer.text);  
    });
    
    const answersElm = element.querySelector('.answers');
    result.forEach(answer => answer.mount(answersElm));

    return element;
  }

  mount(parent) {
    this.element = this.render();
    parent.appendChild(this.element);
  }

  update() {
    const counter = this.element.querySelector('.counter');
    counter.textContent = this.votes;
  }
}