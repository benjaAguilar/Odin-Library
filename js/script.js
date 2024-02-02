const myLibrary = [];

let bookForm = document.querySelector("#book-form");
let dialogAdd = document.querySelector(".dialog-add");
let addBtn = document.querySelector("#add-btn");

let bookInfo = document.querySelector("#book-info");

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

//Add event listener for every book created
function createEvent(book){
    book.addEventListener("click", () => {
        let index;
        let title = book.querySelector("p").textContent;

        let description = document.querySelector(".description");
        let author = document.querySelector(".author");
        let pages = document.querySelector(".pages");
        let read = document.querySelector("#read-info");

        document.querySelector("#info-title").textContent = title;
        document.querySelector(".title").textContent = title; 
        
        myLibrary.forEach((book) => {
            if(book.name === title){
                index = myLibrary.indexOf(book);
                
            }
        });

        description.textContent = myLibrary[index].description;
        author.textContent = "By: " + myLibrary[index].author;
        pages.textContent = "Pages: " + myLibrary[index].pages;
        read.checked = myLibrary[index].read;
        
        read.addEventListener("change", () => {
            myLibrary[index].read = read.checked;

        });

        bookInfo.showModal();
    });
}

function printBook(name){

    let bookSection = document.querySelector(".books");
    let bookBox = document.createElement("div");
    let bookTitle = document.createElement("p");

    bookTitle.textContent = name;

    bookBox.classList.add("example");

    bookBox.appendChild(bookTitle);
    bookSection.appendChild(bookBox);
    
    createEvent(bookBox);
}

dialogAdd.addEventListener("click", () => {bookForm.showModal();});

//Take the book info
addBtn.addEventListener("click", () => {

    let copy;
    let name = document.querySelector("#name").value;
    let description = document.querySelector("#description").value;
    let author = document.querySelector("#author").value;
    let pages = document.querySelector("#pages").value;
    let read = document.querySelector("#read").checked;

    myLibrary.forEach((book) => {
        if(book.name === name){
            copy = book.name;
            alert("that book already exists");
        }
    });

    if(name && description && author && pages != "" && copy != name){
        addBookToLibrary(name, description, author, pages, read);
        printBook(name);

    }
});
