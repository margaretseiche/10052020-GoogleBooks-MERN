const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware 
app.use(express.urlencoded({ extended:true }));
app.use(express.json());

// Serve static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

// start the server
app.listen(PORT, () => {
    console.log(`🌎 ==> API Server now listening on PORT ${PORT}`);
});