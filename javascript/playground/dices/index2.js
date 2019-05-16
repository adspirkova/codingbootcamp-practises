var links = document.getElementsByTagName('a');

for ( i = 0; i < links.length; i++) {
    links[i].className = 'img' + i;
    console.log('hello there' + i); 
} 