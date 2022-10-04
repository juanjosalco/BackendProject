const router = require('express').Router();

const {
    getBook,
    getBooks,
    updateBook,
    createBook,
    deleteBook,

} = require('../controllers/book');

router.get('/', getBook);
router.get('/id/:id', getBooks);
router.post('/', createBook);
router.patch('/id/:id', updateBook);
router.delete('/id/:id', deleteBook);

module.exports = router;