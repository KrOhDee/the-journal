const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema(
  {
    author: {
      type: String,
      trim: true,
    },
    title: {
      type: String,
      required: true,
      trim: true,
    },
    isbn: {
      type: String,
      trim: true,
    },
  },
  { timestamps: true }
);

const Book = mongoose.model('Book', bookSchema);
module.exports = Book;
