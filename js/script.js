const myLibrary = [];

let bookInfo = document.querySelector("#book-info");
let dialogAdd = document.querySelector(".dialog-add");

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

dialogAdd.addEventListener("click", () => {
    bookInfo.showModal();
});

addBookToLibrary("teton", "ashdjakshdjkashjdhahsdhkassh", "jorge espinoza", 188, false);