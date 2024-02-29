const myLibrary = [];

let bookForm = document.querySelector("#book-form");
let dialogAdd = document.querySelector(".dialog-add");
let closeForm = document.querySelector("#close-form");
let addBtn = document.querySelector("#add-btn");
let exampleBook = document.querySelector(".example");

let bookInfo = document.querySelector("#book-info");
let closeInfo = document.querySelector("#close-info");

let delBook = document.querySelector("#delete-book");

class Book{

    constructor(name, description, author, pages, read){
        this.name = name;
        this.description = description;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
    
    itsChecked(){
        this.read = read.checked;    
    }

    showBookInfo(){

        let title = document.querySelector(".title");
        let description = document.querySelector(".description");
        let author = document.querySelector(".author");
        let pages = document.querySelector(".pages");
        let read = document.querySelector("#read-info");

        title.textContent = this.name;
        description.textContent = this.description;
        author.textContent = "By: " + this.author;
        pages.textContent = "Pages: " + this.pages;
        read.checked = this.read;

        read.removeEventListener("change", this.itsChecked);
        read.addEventListener("change", this.itsChecked);

        bookInfo.showModal();
    }

    //Add event listener for every book created
    createEvent(book){
        book.addEventListener("click", () => {
            this.showBookInfo(book);
    });
    }
    
    printBook(){
        let bookSection = document.querySelector(".books");
        let bookBox = document.createElement("div");
        let bookTitle = document.createElement("p");

        bookTitle.textContent = this.name;

        bookBox.classList.add("example");

        bookBox.appendChild(bookTitle);
        bookSection.appendChild(bookBox);
        
        this.createEvent(bookBox);
    }

    addBookToLibrary(book){
        myLibrary.push(book);

    }
    
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
        const book = new Book(name, description, author, pages, read);
        book.addBookToLibrary(book);
        book.printBook();
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
    example.showBookInfo();
});