const express = require('express');
const route = express.Router();
const controller = require('../controller/booksController.js');

route.get('/books', controller.getAllBooks);

route.get('/books/title', controller.getAllTitle);

route.get('/books/authors', controller.getAllAuthors);

route.get('/books/book/:id', controller.getBooksById);

route.get('/books/title/:book', controller.getBookByTitle);

route.get('/books/authors/:author', controller.getBookByAuthor);

module.exports = route;