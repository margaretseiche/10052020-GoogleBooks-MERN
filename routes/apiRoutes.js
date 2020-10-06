const router = require("express").Router();
const db = require("../models");
const booksController = require("../controllers/booksController");

router.get("/books", (req, res) => {
  // Use a regular expression to search titles for req.query.q
  // using case insensitive match. https://docs.mongodb.com/manual/reference/operator/query/regex/index.html

  // db.Recipe.find({
  //   title: { $regex: new RegExp(req.query.q, 'i')}
  // })
  //   .then(recipes => res.json(recipes))
  //   .catch(err => res.status(422).end());

  db.Book.find({
    title: { $regex: new RegExp(req.query.q, 'i')}
  })
    .then(books => res.json(books))
    .catch(err => res.status(422).end());
});

module.exports = router;
