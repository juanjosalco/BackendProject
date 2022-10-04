const router = require('express').Router();
const users = require('./users');
const categories = require('./category');
const editorial = require('./editorial');

router.get('/', (req, res) => {
    res.json({'info': 'Welcome to Users API'});
});

router.use('/index/users', users);
router.use('/index/category', categories);
router.use('/index/editorial', editorial);

module.exports = router;