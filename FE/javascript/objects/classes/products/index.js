
class Product {
    constructor(name, price, quantity){
        this. name = name; /* In the constructor set the properties of the object to the values of these parameters. */
        this.price = price;
        this.quantity = quantity;
    }

    sell() {
        this.quantity-- ;
    }

    /* store(count) {
        return count 
    } */
}

const product1 = new Product ('Speed6', 200, 3);
const product2 = new Product ('Trail', 150, 2);
const product3 = new Product ('Motion', 350, 4);
const product4 = new Product ('Challenger', 320, 3);
const product5 = new Product ('Charger', 290, 2);
const product6 = new Product ('Funham', 270, 4);
const product7 = new Product ('Reed', 410, 3);

const portfolio = [
    product1,
    product2,
    product3,
    product4,
    product5,
    product6,
    product7
]; 

const display = (product) => {
    const divElm = document.createElement('div');
    divElm.className = 'item';
    divElm.innerHTML = 
    `
    <p>Product name:${product.name}</p>
    <p>Price:${product.price}</p>
    <p class="quantity">Quantity:${product.quantity}</p>
    <button class="btn-sell">Buy</button>
    `;

    const btnSell = divElm.querySelector('.btn-sell');
    btnSell.addEventListener('click', () => {
    if (product.quantity===0){
        alert('Sorry no more items available');
    } else {
        product.sell()
    }
    btnSell.textContent = `Thank you!`;
    const updateQ = divElm.querySelector('.quantity');
    updateQ.textContent = `Quantity:${product.quantity}`;
}); 

   
    return divElm;
};


const update = () => {
    const select = document.querySelector('#portfolio');
    select.innerHTML = '';

    for(const product of portfolio) {
        select.appendChild(display(product));
    }
}

document.querySelector('DOMContentLoaded',update());