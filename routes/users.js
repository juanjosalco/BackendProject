const router = require('express').Router();

const {
    getUser,
    getUsers,
    createUser,
    deleteUser,
    updateUser

} = require('../controllers/users');

router.get('/users', getUsers);
router.get('/:id', getUser);
router.post('/', createUser);
router.patch('/:id', updateUser);
router.delete('/:id', deleteUser);

module.exports = router;