const myLibrary = [
    {title: "The Hunger Games" , author: "Suzanne Collins"},
    {title: "Harry Potter", author: "J.K. Rowling"},
    {title: "Pride and Prejudice", author: "Jane Austen"},
    {title: "To Kill a Mockingbird", author: "Harper Lee"}
];

function Book(title, author) {
    this.title = title;
    this.author = author;
}

document.getElementById("myForm").addEventListener("submit", function(event) {

    event.preventDefault();

    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;

    let book;

    book = new Book(title, author);
    myLibrary.push(book);

    console.log(myLibrary);

    displayLibrary();

    this.reset();

});

function displayLibrary() {

    let library = document.getElementById("library");
    library.textContent = "";

    for (const index in myLibrary) {

        let card = document.createElement("div");
        card.classList.add("card");
        card.textContent = myLibrary[index].title + "\n" + myLibrary[index].author;
        card.setAttribute("data-index", index);

        library.appendChild(card); 

        let button = document.createElement("button");
        button.textContent = "X";
        button.classList.add("button");

        card.appendChild(button);

    }

    document.querySelectorAll(".button").forEach(function(button){
        button.addEventListener("click", function() {
            let parent = this.parentNode.getAttribute("data-index");
            console.log(parent);
            myLibrary.splice(parent, 1);
            displayLibrary();
        })
    });
}

document.getElementById("display").addEventListener("click", displayLibrary);

displayLibrary();