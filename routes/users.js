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
router.get('/id/:id', getUser);
router.post('/', createUser);
router.patch('/id/:id', updateUser);
router.delete('/id/:id', deleteUser);
router.get('/search/:rol', bringByRol);

module.exports = router;