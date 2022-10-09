const router = require('express').Router();
const auth = require('../config/auth')
const passport = require ('passport')
const authpassport = passport.authenticate('bearer',{session:false,assignProperty: 'user'})

const {
    getBook,
    getBooks,
    updateBook,
    createBook,
    deleteBook,

} = require('../controllers/book');

router.get('/', getBooks);
router.get('/id/:id',authpassport,auth.required, getBook);
router.post('/',authpassport,auth.required, createBook);
router.patch('/id/:id',authpassport,auth.required, updateBook);
router.delete('/id/:id',authpassport,auth.required,deleteBook);

module.exports = router;