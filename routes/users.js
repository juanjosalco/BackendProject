const router = require('express').Router();

const {
    getUser,
    getUsers,
    createUser,
    deleteUser,
    updateUser,
    bringByRol

} = require('../controllers/users');

router.get('/', getUsers);
router.get('/:id', getUser);
router.post('/', createUser);
router.patch('/:id', updateUser);
router.delete('/:id', deleteUser);
router.get('/especial', bringByRol);

module.exports = router;