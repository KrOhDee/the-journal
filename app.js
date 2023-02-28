const express = require('express');
const mongoose = require('mongoose');
const controller = require('./controllers/controller');
const Book = require('./models/book');

const app = express();

const dbURI =
  'mongodb+srv://lja11202526:Cocopuffs2526@thejournal.60wtmcp.mongodb.net/thejournal?retryWrites=true&w=majority';
mongoose
  .connect(dbURI)
  .then((result) => app.listen(3000))
  .catch((err) => console.log('err'));

app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

const path = require('path');
const publicPath = path.join(__dirname, './public');

console.log(publicPath);

app.get('/', controller.book_index);

app.get('/about', controller.about_);

app.post('/', (req, res) => {
  const book = new Book({
    title: req.body.title,
    author: req.body.author,
    isbn: req.body.isbn,
  });

  book
    .save()
    .then(() => {
      res.redirect('/');
    })
    .catch((error) => {
      console.log(error);
      res.render('index', { title: 'Home', books: books });
    });
});

app.delete('/books/:id', (req, res) => {
  const id = req.params.id;
  console.log(id);

  Book.findByIdAndDelete(id)
    .then(() => {
      res.sendStatus(200);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(500);
    });
});

app.use((req, res) => {
  res.status(404).render('404', { title: '404' });
});
