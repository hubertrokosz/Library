const myLibrary = [
    {title: "The Hunger Games", author: "Suzanne Collins", read: "yes"},
    {title: "Harry Potter", author: "J.K. Rowling", read: "yes"},
    {title: "Pride and Prejudice", author: "Jane Austen", read: "no"},
    {title: "To Kill a Mockingbird", author: "Harper Lee", read: "yes"}
];

function Book(title, author, read) {
    this.title = title;
    this.author = author;
    this.read = read;
}

document.getElementById("myForm").addEventListener("submit", function(event) {

    event.preventDefault();

    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let read = document.querySelector("input[name='agreement']:checked").id;

    let book;

    book = new Book(title, author, read);
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

        if (myLibrary[index].read == "yes") card.textContent += "\n Read";
        else if (myLibrary[index].read == "no") card.textContent += "\n Not read yet";

        card.setAttribute("data-index", index);

        library.appendChild(card); 

        let buttonDelete = document.createElement("button");
        buttonDelete.textContent = "X";
        buttonDelete.classList.add("button-delete");

        card.appendChild(buttonDelete);

        let buttonToggle = document.createElement("button");
        buttonToggle.textContent = "Toggle";
        buttonToggle.classList.add("button-toggle");

        card.appendChild(buttonToggle);

    }

    document.querySelectorAll(".button-delete").forEach(function(button){
        button.addEventListener("click", function() {
            let parent = this.parentNode.getAttribute("data-index");
            console.log(parent);
            myLibrary.splice(parent, 1);
            displayLibrary();
        })
    });

    document.querySelectorAll(".button-toggle").forEach(function(button){
        button.addEventListener("click", function() {
            let parent = this.parentNode.getAttribute("data-index");
            
            if (myLibrary[parent].read == "no") myLibrary[parent].read = "yes";
            else if (myLibrary[parent].read == "yes") myLibrary[parent].read = "no";
            displayLibrary();
        })
    });
}

document.getElementById("display").addEventListener("click", displayLibrary);

displayLibrary();