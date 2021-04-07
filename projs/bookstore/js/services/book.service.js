'use strict';

var gBooks;
var gSortBy = '';
var gPage = 0;
var PAGE_SIZE = 3;

function createBooks() {
    var books = getFromStorage('books');
    if (!books || books.length === 0) {
        books = [
            _createBook('harry Potter'),
            _createBook('Percy Jackson'),
            _createBook('The Hobbit'),
        ]
    }
    gBooks = books;
    console.log(gBooks);
    saveToStorage('books', gBooks);
}

function removeBook(id) {
    var bookIdx = getBookIdx(id)
    gBooks.splice(bookIdx, 1);
    saveToStorage('books', gBooks);
}

function updateBook(id, price) {
    var currBook = getBookById(id);
    currBook.price = price;
    saveToStorage('books', gBooks);
}

function createNewBook(title, price) {
    var newBook = _createBook(title, price);
    gBooks.push(newBook);
    saveToStorage('books', gBooks);
}

function changeRating(num, currBook) {
    if (currBook.rating === 0 && num === -1) return
    if (currBook.rating === 10 && num === 1) return

    currBook.rating += num;
    saveToStorage('books', gBooks);

}

function getBooksForDisplay() {
    if (gSortBy === 'abc') {
        gBooks.sort(function (book1, book2) {
            if (book1.title.charAt(0).toLowerCase() > book2.title.charAt(0).toLowerCase()) return 1;
            if (book1.title.charAt(0).toLowerCase() < book2.title.charAt(0).toLowerCase()) return -1;
        })
    }

    if (gSortBy === 'rabc') {
        gBooks.sort(function (book1, book2) {
            if (book1.title.charAt(0).toLowerCase() > book2.title.charAt(0).toLowerCase()) return -1;
            if (book1.title.charAt(0).toLowerCase() < book2.title.charAt(0).toLowerCase()) return 1;
        })
    }

    if (gSortBy === 'high') {
        gBooks.sort(function (book1, book2) {
            if (book1.price > book2.price) return -1;
            if (book1.price < book2.price) return 1;
        })
    }

    if (gSortBy === 'low') {
        gBooks.sort(function (book1, book2) {
            if (book1.price > book2.price) return 1;
            if (book1.price < book2.price) return -1;
        })
    }

    return gBooks.slice(gPage * PAGE_SIZE, gPage * PAGE_SIZE + PAGE_SIZE);
}

function getBookById(id) {
    var currBook = gBooks.find(function (book) {
        return book.id === id;
    })
    return currBook;
}

function getBookIdx(id) {
    var bookIdx = gBooks.findIndex(function (book) {
        return book.id === id;
    })
    return bookIdx;
}

function _makeId(length = 5) {
    var txt = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (var i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return txt;
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function _createBook(title, price = getRandomInt(5, 21)) {
    var book = {
        id: _makeId(),
        title,
        price,
        rating: 0,
    }
    return book;
}

function changeFilter(sortBy) {
    if (sortBy === 'abc' && gSortBy === 'abc') gSortBy = 'rabc'
    else if (sortBy === 'high' && gSortBy === 'high') gSortBy = 'low';
    else gSortBy = sortBy;
}

function changePage(diff) {
    if (gPage === 0 && diff === -1) return
    if (gPage + 1 >= gBooks.length / PAGE_SIZE && diff === 1) return
    gPage += diff;
}

function getPageNum() {
    return gPage;
}