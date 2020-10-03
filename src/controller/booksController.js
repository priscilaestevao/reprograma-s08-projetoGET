const books = require('../models/livros-negros.json');

const getAllBooks = (req, res) => {
    res.status(200).send(books)
};

const getBooksById = (req, res) => {
    const id = req.params.id
    const booksFind = books.find((bookId) => bookId.id == id)
    res.status(200).send(booksFind)
};

const getAllTitle = (req, res) => {
    const allTitle = books.map((booksList) => booksList.book)
    res.status(200).send(allTitle)
};

const getBookByTitle = (req, res) => {
    const bookFound = req.params.book
    const bookFilter = books.filter((titleFound) => titleFound.book == bookFound)
    res.status(200).send(bookFilter)
};

const getAllAuthors = (req, res) => {
    const allAuthors = books.map((authorsList) => authorsList.author)
    res.status(200).send(allAuthors)
}

const getBookByAuthor = (req, res) => {
    const bookAuthor = req.params.author
    const authorFilter= books.filter((authorFound) => authorFound.author == bookAuthor)
    res.status(200).send(authorFilter)
}

module.exports = {
    getAllBooks,
    getBooksById,
    getAllTitle,
    getBookByTitle,
    getAllAuthors,
    getBookByAuthor
}