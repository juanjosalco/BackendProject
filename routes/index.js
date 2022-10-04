const router = require('express').Router();
const users = require('./users');
const categories = require('./category');
const editorial = require('./editorial');

router.get('/', (req, res) => {
    res.json({'info': 'Welcome to Users API'});
});

router.use('/users', users);
router.use('/category', categories);
router.use('/editorial', editorial);

module.exports = router;