const myLibrary = [];

let addBook = document.querySelector("#add-book");
let addButton = document.querySelector(".add-button");

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

addButton.addEventListener("click", () => {
    addBook.showModal();
});

addBookToLibrary("teton", "ashdjakshdjkashjdhahsdhkassh", "jorge espinoza", 188, false);