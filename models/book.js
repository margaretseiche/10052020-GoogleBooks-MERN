const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  authors: [String],

  description: {
    type: String,
    default: ""
  },

  // url string for thumbnail image
  thumbnail: {
    type: String,
    default: ""
  },

  // url for recipe web page - unique index
  href: {
    type: String,
    default: "",
    unique: true
  }
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
