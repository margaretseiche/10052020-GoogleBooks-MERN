const express = require("express");
const path = require("path");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3001;
const app = express();

// Define middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve static assets (usually on Heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

// Connect to the Mongo database
mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/reactgooglebooks",
    { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true} 
);

app.listen(PORT, () => {
    console.log(`🌎==> Server now on port ${PORT}!`);
});
