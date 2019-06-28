import Question from './question.js';

document.addEventListener('DOMContentLoaded', () => {
  const question = new Question(
    'My first question', 
    'A nice sexy body',
    [
      {
        user: 'Vilash Deshmukh',
        text: 'Because he was smart enough to understand that it was foolish of him to be thinking that he would ever become immortal in the Body that he was in.'
      },
      {
        user: 'Jung Hoon Lee',
        text: 'He was a physicist and not a biologist. Even if he were, he like us was limited by the technology of the times he lived in'
      },
      {
        user: 'Kris Lim',
        text: 'Because humanity better find several other planets that can sustain humans before finding the secret of immortality.'
      },
    ]
  );

  const question2 = new Question(
    'My section question', 
    'An old and wrinkly body', 
    [],
  );

  const app = document.querySelector('#app');
  question.mount(app);
  question2.mount(app);
});