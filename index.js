// app.js
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const bookRouter = require("./routers/book-router");

app.use(bodyParser.json());
app.use("/books", bookRouter);

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
