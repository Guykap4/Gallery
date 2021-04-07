'use strict';

function init() {
    createBooks();
    renderBooks();
}

function renderBooks() {
    var books = getBooksForDisplay();
    var strHTML = books.map(function (book) {
        return `
        <tr>
        <td>${book.id}</td>
        <td>${book.title}</td>
        <td>${book.price}</td>
        <td>
        <button class="action-btn" onclick="onReadBook('${book.id}')">Read</button>
        <button class="action-btn" onclick="onUpdateBook('${book.id}')">Update</button>
        <button class="action-btn" onclick="onRemoveBook('${book.id}')">Delete</button></td>
        </tr>
        `
    })
    document.querySelector('.book-table tbody').innerHTML = strHTML.join('');
}

function onRemoveBook(id) {
    if (confirm('Are you sure?')) {
        removeBook(id);
        renderBooks();
    }
}

function onUpdateBook(id) {
    var price = +prompt('Enter new Price:');
    updateBook(id, price);
    renderBooks();
}

function onAddBook() {
    var title = prompt('Please enter Title:')
    var price = +prompt('Enter new Price:');

    createNewBook(title, price);
    renderBooks();
}

function onReadBook(id) {
    var currBook = getBookById(id)
    document.querySelector('.book-title').innerText = currBook.title;
    document.querySelector('.book-price').innerText = `${currBook.price}$`;
    document.querySelector('.book-img').innerHTML = `<img onerror="onImgError(this)" src="./img/${currBook.title}.jpg" />`;
    renderRating(currBook);
    document.querySelector('.book-info').style.display = 'flex';
}

function renderRating(currBook) {
    var strHTML = `<h4>Rating</h4>
    <button class="substract-rating" onclick="onChangeRating(-1, '${currBook.id}')">-</button>
    <span class="book-score">${currBook.rating}</span>
    <button class="add-rating" onclick="onChangeRating(1, '${currBook.id}')">+</button>`
    document.querySelector('.rating').innerHTML = strHTML;
}

function onCloseModal () {
    document.querySelector('.book-info').style.display = 'none';
}

function onChangeRating(num, bookId) {
    var currBook = getBookById(bookId);
    changeRating(num, currBook);
    renderRating(currBook);
}

function onSort(sortBy) {
    changeFilter(sortBy);
    renderBooks();
}

function onImgError(image) {
    image.onerror = "";
    image.src = "./img/default.jpg";
    return true;
}

function onChangePage(diff) {
    changePage(diff);
    renderPage();
    renderBooks();
}

function renderPage() {
    document.querySelector('.page-div span').innerText = getPageNum()+1;
}