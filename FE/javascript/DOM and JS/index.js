const item = [
    'peter', 'jane', 'tarzan', 'louise', 'superman',
];




document.addEventListener('DOMContentLoaded', ()=> {
    ()=>{
    const container = document.querySelector('.container');
    container.innerHTML="";
    for (let i=0; i< item.lenght; i++) {
        const box = document.createElement('div');
        box.className = 'item';
        box.innerHTML = `<strong>${items[i]}</string>`;
        container.appendChild(box);
    }}
    /* container.innerHTML = '<div class="box">Hello word</div>' */
})