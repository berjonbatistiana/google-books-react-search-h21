const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// book schema for the mongoDB
// requires a title an author, a link, a description, an image, a googleId
// required fields are and should be provided by the google book search API
const bookSchema = new Schema({
  title: { type: String, required: true },
  subtitle: { type: String },
  authors: { type: [String], required: true },
  link: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  googleId: { type: String, required: true, unique: true }
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
