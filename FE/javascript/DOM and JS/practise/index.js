const items = [{
    name: 'banana', /* ["banana", "apple"] items.name[2]=apple */
    amount: 3
}, {name: 'apple',
amount: 2
}, {name: 'orange',
amount: 4
}, {name: 'coconut',
amount: 1
},];

const myfunction = () => {
    const container = document.querySelector(".list");
    container.innerHTML = "";
    for(let i = 0; i < items.length; i++) {
    const liElm = document.createElement('li');
    liElm.className = 'item';
    liElm.innerHTML = `${items[i].name + "  with an amount of " + items[i].amount + '<span id="span">     x</span>'}`;
    container.appendChild(liElm);}
}
const mydelfunction = () => {
    const delitem = document.querySelector(".item");
    items.pop(delitem); 
    console.log('Hi');
}

/* Put a cross beside each item which, when clicked, will delete the item from the list. */


document.addEventListener('DOMContentLoaded', ()=> {
    myfunction();
    const Click = document.querySelector("#add");
    Click.addEventListener('click', ()=> {
        const item = document.querySelector("#inputlist");
        const listitem = {name: item.value};
        items.push(listitem); 
        myfunction();
    })

    const Del = document.querySelector("#span");
    Del.addEventListener('click', ()=> {
        mydelfunction()
    })
});

