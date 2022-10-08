const router = require('express').Router();
const auth = require('../config/auth')
const passport = require ('passport')

const {
    getUser,
    getUsers,
    signUp,
    logIn,
    deleteUser,
    updateUser,
    bringByRol,
    bringByAttributes

} = require('../controllers/users');

router.get('/', getUsers);
router.get('/id/:id',[passport.authenticate('bearer',{session:false,assignProperty: 'user'})],auth.isAdmin, getUser);
router.post('/signUp', signUp);

router.patch('/id/:id', updateUser);
router.delete('/id/:id', deleteUser);
router.get('/search/atributos', bringByAttributes);
router.get('/search/rol/:rol',bringByRol);
router.post('/logIn',logIn);
module.exports = router;