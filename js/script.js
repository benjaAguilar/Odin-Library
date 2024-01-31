const myLibrary = [];

let addBook = document.querySelector("#add-book");
let addButton = document.querySelector(".add-button");

function Book(name, author, pages, read){

    this.name = name;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(name, author, pages, read){

    const book = new Book(name, author, pages, read)
    myLibrary.push(book);
    console.log(myLibrary);
}

addButton.addEventListener("click", () => {
    addBook.showModal();
});

addBookToLibrary("teton", "jorge espinoza", 188, false);