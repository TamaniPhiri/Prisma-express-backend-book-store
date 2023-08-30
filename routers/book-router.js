const BookController = require('../controllers/book-controller');

const router=require('express').Router();


router.get('/',BookController.getBooks)
router.post('/',BookController.createBook);
router.put('/:id',BookController.updateBook);
router.delete('/:id',BookController.deleteBookById);
router.get('/:id',BookController.getBookById);

module.exports=router;