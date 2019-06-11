/* Const foo = () => {
    let x =10;

   setTimeout(()=> {
Console.log(x);
}, 2000);}
 */



console.log('Hi sweetheart!')
  console.log(conversation[0].name);


  
  const play = () => {
      const bot = document.querySelector("#element");
      for(let i = 0; i < conversation.length; i++) {
        if (conversation[i].name === 'Cleverbot'){
            const pElm = document.createElement('div');
            pElm.className = 'msg';
            pElm.innerHTML = `${
            '<div class="container">'+
            '<img src="assignment (5)/cleverbot.png" alt="cleverbotpic">' + 
            '<p class=cleverbot>'+ conversation[i].text + '</p>'+ 
            '<button class="like">Likes: 0</button>' + '</div>'}`;
            const like = pElm.querySelector('.like');
            like.addEventListener('click', ()=> {
                like.textContent = 'Likes:1';
            })
            bot.appendChild(pElm);
            console.log('Hi from cleverbot!');
        }
        if (conversation[i].name === 'Unicorn'){
            const parElm = document.createElement('div');
            parElm.className = 'msg';
            parElm.innerHTML = `${
            '<div class="container2">'+
            '<img  src="assignment (5)/unicorn.png" alt="unicornpic">' + 
            '<p class=cleverbot>' + conversation[i].text + '</p>'+ 
            '<button class="like">Likes: 0</button>' + '</div>'}`;
            const like = parElm.querySelector('.like');
            like.addEventListener('click', ()=> {
                like.textContent = 'Likes:1';
            })
            bot.appendChild(parElm);
            console.log('Hi from unicorn!');
            }
        }
}



const add = () => {
    console.log('Hi from add function!');
    const input = document.querySelector("input");
    const msg = input.value;
/*     conversation.push(msg); */
    msg.textContent="";
}

  document.addEventListener('DOMContentLoaded', ()=>{
    play ();
    const Click = document.querySelector("#send");
    Click.addEventListener('click', add());
  });
