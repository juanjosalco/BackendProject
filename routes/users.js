const router = require('express').Router();

const {
    getUser,
    getUsers,
    signUp,
    deleteUser,
    updateUser,
    bringByRol,
    bringByAttributes

} = require('../controllers/users');

router.get('/', getUsers);
router.get('/id/:id', getUser);
router.post('/', signUp);
router.patch('/id/:id', updateUser);
router.delete('/id/:id', deleteUser);
router.get('/search/atributos', bringByAttributes);
router.get('/search/rol/:rol',bringByRol);

module.exports = router;