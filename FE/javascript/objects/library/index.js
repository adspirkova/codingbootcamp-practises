// Assignment 2: The public library
// Let's practice representing data in our web application. We will create a simple library website for which we need an object representing a book.


// Stage 1:
// 1. Design an object which will represent a book in a public library. The book should have at least these properties
// title
// it should allow for multiple authors
// number of pages
// publish year
// whether the book can be borrowed home or can be only viewed in the library
// whether the book is borrowed or present in the library. 

const book1 = {
    title: 'Javascript for good night',
    authors: ['Madonna', 'Sting'],
    noOfPages: 326,
    yearpublished: '1996',
    libraryonly: true,
    borrowed: false,
}
const book2 = {
    title: 'Javascript for Dummies',
    authors: ['Lil Jon', 'Bon Jovi'],
    noOfPages: 25,
    yearpublished: '2013',
    libraryonly: false,
    borrowed: true,
}

const book3 = {
    title: 'Become professional in Javascript',
    authors: ['Elton John', 'Lady Gaga'],
    noOfPages: 1050,
    yearpublished: '2000',
    libraryonly: true,
    borrowed: false,
}

// 2. Once you have the structure, pick three or four favorite books of yours and create an array of them.

const library = [
    // Book 1
    book1,
    // Book2
    book2,
    // Book3 
    book3, 
]

// 3. Make a simple (but nice) website which displays the list of these books in some way.

const displaylibrary = () => {
    console.log('Hello');
    const container = document.querySelector(".bookshelf");
    container.innerHTML = "";
    for(let i = 0; i < library.length; i++) {
    const divElm = document.createElement('div');
    divElm.className = 'item';
    divElm.innerHTML = 
    ` Title: ${library[i].title + "<br>" + 
    'Authors: ' + library[i].authors + "<br>" + 
    'No of Pages: '  + library[i].noOfPages + "<br>" + 
    'Year Published: ' + library[i].yearpublished  + "<br>" + 
    'Available only in library: ' + library[i].libraryonly + "<br>" + 
    'Not currently available: ' + library[i].borrowed }`;
    container.appendChild(divElm);}
    console.log('Hi there!')
}

// Stage 2:
// At the bottom of the page create a form which will allow the library administrator to add a new book to the library.

const addtitle = () => {
    const title = document.querySelector("#title, #author, #pages,#year, #libraryonly, #present");
    const newitem = {title: title.value, authors: author.value, noOfPages: pages.value, yearpublished: year.value, libraryonly: libraryonly.value, borrowed: present.value};
    library.push(newitem);
    
}

// In the list of books add a button which will allow the user to borrow the book it it is not yer borrowed by somebody else.


const borrowlist = () => {
    const borrow = document.querySelector('.borrowdrop');
    borrow.innerHTML = "";
    for(let i = 0; i < library.length; i++) {
        if (library[i].borrowed=== false){
        const optionElm = document.createElement('option');
        optionElm.className = 'availableitem';
        optionElm.innerHTML = 
        `${library[i].title}`;
        borrow.appendChild(optionElm);
    }
    }
}

const borrowing = () => {
    for(let i = 0; i < library.length; i++) {
        const borrowingit = document.querySelector(".borrowdrop");
        const borrowingitem = borrowingit.value;
        if (borrowingitem === library[i].title) {
            library[i].borrowed = true;
            console.log('see ya!')
        }}
}

document.addEventListener('DOMContentLoaded', ()=> {
    displaylibrary();
    borrowlist();
    const Click = document.querySelector('#submit');
    Click.addEventListener('click', ()=> {
        addtitle();
        borrowlist();
        displaylibrary();
    });
    const Click2 = document.querySelector('#borrow');
    Click2.addEventListener('click', ()=> {
        borrowing();
        borrowlist();
        displaylibrary();
    });

});


