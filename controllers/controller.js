const Book = require('../models/book');

//Need to finish adding all of them

const book_index = (req, res) => {
  Book.find()
    .sort({ createdAt: -1 })
    .then((books) => {
      console.log(books);
      res.render('index', {
        title: 'Home',

        books: books,
      });
    })
    .catch((error) => {
      console.log(error);
      res.render('index', { title: 'Home', books: books });
    });
};

const about_ = (req, res) => {
  res.render('about', { title: 'About' });
};

module.exports = {
  book_index,
  about_,
};
