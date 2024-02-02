const myLibrary = [];

let bookForm = document.querySelector("#book-form");
let dialogAdd = document.querySelector(".dialog-add");
let closeForm = document.querySelector("#close-form");
let addBtn = document.querySelector("#add-btn");
let exampleBook = document.querySelector(".example");

let bookInfo = document.querySelector("#book-info");
let closeInfo = document.querySelector("#close-info");

let delBook = document.querySelector("#delete-book");

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

function showBookInfo(clickedBook){
    let index;
    let title = clickedBook.querySelector("p").textContent;

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

    read.removeEventListener("change", itsChecked)
    read.addEventListener("change", itsChecked);

    function itsChecked(){
        let infoTitle = document.querySelector(".title").textContent;

        if(myLibrary[index].name === infoTitle){
            myLibrary[index].read = read.checked;

        }

        console.log("Estado cambiado:", myLibrary[index].name + " " + myLibrary[index].read);
    }

    bookInfo.showModal();
}

//Add event listener for every book created
function createEvent(book){
    book.addEventListener("click", () => {
        showBookInfo(book);
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
closeForm.addEventListener("click", () => {bookForm.close();});
closeInfo.addEventListener("click", () => {bookInfo.close();});

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

delBook.addEventListener("click", () => {
    let index;
    let title = document.querySelector(".title").textContent;
    let takeBooks = document.querySelectorAll(".example");
    
    myLibrary.forEach((book) => {
        if(title === book.name){
            index = myLibrary.indexOf(book);
            myLibrary.splice(index, 1);
        }
    });

    takeBooks.forEach((book) => {
        let name = book.querySelector("p").textContent;

        if(title === name){
            book.remove();
        }
    })

    bookInfo.close();
});

let example = new Book(
    "The Alchemyst",
    "A special 25th anniversary edition of the extraordinary international bestseller, including a new Foreword by Paulo Coelho Combining magic, mysticism, wisdom and wonder into an inspiring tale of self-discovery, The Alchemist has become a modern classic, selling millions of copies around the world and transforming the lives of countless readers across generations. Paulo Coelhos masterpiece tells the mystical story of Santiago, an Andalusian shepherd boy who yearns to travel in search of a worldly treasure. His quest will lead him to riches far different—and far more satisfying—than he ever imagined. Santiagos journey teaches us about the essential wisdom of listening to our hearts, of recognizing opportunity and learning to read the omens strewn along lifes path, and, most importantly, to follow our dreams.",
    "Paulo Coelho",
    208,
    true);

myLibrary.push(example);
exampleBook.addEventListener("click", () => {
    showBookInfo(exampleBook);
});