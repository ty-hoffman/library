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