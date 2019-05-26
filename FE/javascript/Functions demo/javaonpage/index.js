const greet = () => {
    const input = document.querySelector('#name');
    input.className = 'bg-red';
    const name = input.value;
    const heading = document.querySelector('h1');
    heading.textContent = 'Hello ' + name;
    heading.style.color = 'orange';
}

