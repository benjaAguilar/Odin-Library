const myLibrary = [];

let bookForm = document.querySelector("#book-form");
let dialogAdd = document.querySelector(".dialog-add");
let addBtn = document.querySelector("#add-btn");

function Book(name, description, author, pages, read){

    this.name = name;
    this.description = description;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(name, description, author, pages, read){

    const book = new Book(name, description, author, pages, read)
    myLibrary.push(book);
    console.log(myLibrary);
}

dialogAdd.addEventListener("click", () => {bookForm.showModal();});

addBtn.addEventListener("click", () => {

    let name = document.querySelector("#name").value;
    let description = document.querySelector("#description").value;
    let author = document.querySelector("#author").value;
    let pages = document.querySelector("#pages").value;
    let read = document.querySelector("#read").checked;

    addBookToLibrary(name, description, author, pages, read);
    myLibrary.forEach((book) => document.querySelector(".books").textContent += book.name);
});
