const router = require('express').Router();
const users = require('./users');

router.get('/', (req, res) => {
    res.json({'info': 'Welcome to Users API'});
});

router.use('/users', users);

module.exports = router;