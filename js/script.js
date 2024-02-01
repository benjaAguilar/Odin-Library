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
    console.log(myLibrary.indexOf(book));
}

function printBook(name){

    let bookSection = document.querySelector(".books");
    let bookBox = document.createElement("div");
    let div = document.createElement("div");
    let divTitle = document.createElement("div");
    let bookTitle = document.createElement("p");

    bookTitle.textContent = name;

    bookBox.classList.add("example");
    div.classList.add("border-book");
    divTitle.classList.add("title-bg");

    divTitle.appendChild(bookTitle)
    div.appendChild(divTitle);
    bookBox.appendChild(div);
    bookSection.appendChild(bookBox);
}

dialogAdd.addEventListener("click", () => {bookForm.showModal();});

//Take the book info
addBtn.addEventListener("click", () => {

    let name = document.querySelector("#name").value;
    let description = document.querySelector("#description").value;
    let author = document.querySelector("#author").value;
    let pages = document.querySelector("#pages").value;
    let read = document.querySelector("#read").checked;

    addBookToLibrary(name, description, author, pages, read);
    printBook(name);
   
});
