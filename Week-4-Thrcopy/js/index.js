
document.addEventListener('DOMContentLoaded', () => {
  const app = document.querySelector('#app');
  const stage = new Stage(1020,510);
  stage.mount(app);

  const robert = new Pacman ('Robert', 0, 0, 0,'closed');
  const staging = document.querySelector('.stage');
  robert.mount(staging);
  robert.update();
  document.addEventListener('keydown', (event) => {
    robert.move(event);
  }); 
});

