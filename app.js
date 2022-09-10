let books = [];

function addBook (e) {
    // to stop the form from submitting itself when the button is clicked
    e.preventDefault();

    // creating an object to store the information taken from the user input
    let book = {
        bookTitle: document.getElementById('bookTitle').value,
        bookAuthor: document.getElementById('bookAuthor').value,
        bookPages: document.getElementById('bookPages').value,
        bookRead: document.getElementById('bookRead').value
    }
    books.push(book);
    document.getElementById('form').reset();

    let para = document.querySelector(".para");
    para.textContent = JSON.stringify(books, '\t', 2) + '\n';
    console.warn('added', {books});
}

/*
So what basically is happening here is, once the page's DOM is done loading, and when the button
is clicked with it's event listener set to click, the button should call a function called 'addBook'.
*/
document.addEventListener (
    "DOMContentLoaded", function () {
        document.getElementById("btn").addEventListener("click", addBook);
    }
)