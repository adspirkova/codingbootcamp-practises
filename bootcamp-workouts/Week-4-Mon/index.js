console.log('hello');

document.addEventListener('DOMContentLoaded', () => {
  const aside = document.querySelector('#navbar');
  aside.addEventListener('mouseenter', () => {
    aside.classList.remove('hide');
  });

  aside.addEventListener('mouseleave', () => {
    aside.classList.add('hide');
  });
  });