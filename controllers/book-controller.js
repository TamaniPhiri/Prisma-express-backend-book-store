const bookService = require("../services/book-service");

const BookController = () => {
  const getBooks = async (req, res) => {
    try {
      const books = await bookService.getAllBooks();
      res.status(200).json(books);
    } catch (error) {
      console.log(error);
      res.status(400).json(error);
    }
  };
  const getBookById = async (req, res) => {
    try {
      const { id } = req.params;
      const book = await bookService.getBookById(id);
      if (!book) {
        return res.status(400).json("Book not found");
      }
      res.status(200).json(book);
    } catch (error) {
      console.log(error);
      res.status(400).json(error.message);
    }
  };
  const createBook = async (req, res) => {
    try {
      const book = await bookService.createBook(req.body);
      res.status(200).json(book);
    } catch (error) {
      console.log(error);
      res.status(400).json(error);
    }
  };
  const updateBook = async (req, res) => {
    try {
      const { id } = req.params;
      const { name } = req.body;
      const updatedBook = await bookService.updateBookById(id, name);
      res.status(200).json(updatedBook);
    } catch (error) {
      console.log(error);
      res.status(400).json(error);
    }
  };
  const deleteBookById = async (req, res) => {
    try {
      const { id } = req.params;
      await bookService.deleteBookById(id);
      res.status(200).json("Book deleted");
    } catch (error) {
      console.log(error);
      res.status(400).json(error);
    }
  };
  return {
    getBooks,
    createBook,
    updateBook,
    deleteBookById,
    getBookById,
  };
};

module.exports = BookController();
