
document.addEventListener('DOMContentLoaded', () => {
  const app = document.querySelector('#app');
  const stage = new Stage(12,6);
  stage.mount(app);

  const adel = new Pacman (stage, 'Adél', 0, 0, 0,'closed',0,'boy', 'dark');
  adel.mount(stage.element);

  const dasa = new Pacman (stage, 'Dáša', 0, 2, 0,'closed',0,'girl', 'medium');
  dasa.mount(stage.element);

  const maja = new Pacman (stage, 'Mája', 0, 6, 2,'closed',0,'girl', 'light');
  maja.mount(stage.element);

  const terka = new Pacman (stage, 'Terka', 0, 1, 2,'closed',0,'girl', 'light');
  terka.mount(stage.element);

  document.addEventListener('keydown', (event) => {
    adel.move(event);
  }); 
});

