const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("../server2/node_modules/dotenv/lib/main").config();
const PORT = process.env.PORT || 8086;
const app = express();
app.use(cors());
const bp = require("body-parser");
app.use(bp.json());

const Book = require("../server2/models/book");

mongoose.connect(process.env.DATABASE_URL);



app.get("/", ( req, res) => {
res.json("You are on the root route of book app.");
});


app.get("/books", async ( req, res) => {
 const books = await Book.find(req.query);
 res.json(books);
});

// post - Create

app.post("/books", async (req, res) => {
 const newBook = await Book.create(req.body);
 res.json(newBook);
});

//delete - delete
app.delete("/books/:id", async (req, res) => {
 const deletedBook   = await Book.findByIdAndDelete(req.params.id);
 res.json(deletedBook);
});

// put -UPDATE


app.listen(PORT, () => console.log(`App is listening on port ${PORT}`));