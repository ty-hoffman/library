const myLibrary = [];

function Book (title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function () {
        return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`
    };
}

/* create function to add book to library array */
function addBookToLibrary (bookToAdd) {
    myLibrary.push(bookToAdd);
}

function populateBookGrid () {

    /* clearing out grid */
    emptyGridOfBooks();
    
    let list = document.querySelector('.booksList');
    let newListElement = document.createElement('li')
    newListElement.classList.add('bookItem');
    myLibrary.forEach((book) => {
        newListElement.textContent = book.info();
    })
}

/* function to delete books from DOM */
function emptyGridOfBooks () {
    let allBooks = document.querySelectorAll('.bookItem');
    allBooks.remove();
}

let showFormSelector = document.querySelector('#openFormButton');
let closeFormSelector = document.querySelector('#closeFormButton');
let dialog = document.querySelector('dialog');

showFormSelector.addEventListener('click', () => {
    dialog.showModal();
})
closeFormSelector.addEventListener('click', () => {
    dialog.close();
})
