const router = require('express').Router();
const users = require('./users');
const categories = require('./category');
const editorial = require('./editorial');

router.get('/', (req, res) => {
    res.json({'info': 'Welcome to Users API'});
});

router.use('/casa/users', users);
router.use('/casa/category', categories);
router.use('/casa/editorial', editorial);

module.exports = router;