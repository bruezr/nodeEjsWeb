const Book = require('../models/book');

exports.getBooks = async (req, res, next) => {
  try {
    const books = await Book.find();
    res.render('books', {
      books: books,
      pageTitle: 'Books Index',
      path: '/',
    });
  } catch (error) {
    return next(error);
  }
};
