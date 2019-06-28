export default class Answer {
  constructor(user, text) {
    this.user = user;
    this.text = text;
  }

  render() {
    const element = document.createElement('div');
    element.className = 'answer';
    element.innerHTML = `
      <div class="user">${this.user}</div>
      <div class="text">${this.text}</div>
    `;

    return element;
  }

  mount(parent) {
    this.element = this.render();
    parent.appendChild(this.element);
  }
}