const router = require('express').Router();
const auth = require('../config/auth')
const passport = require ('passport')

const authpassport = passport.authenticate('bearer',{session:false,assignProperty: 'user'})
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

router.get('/',getUsers);
router.get('/id/:id',authpassport,auth.required, getUser);
router.post('/signUp', signUp);

router.patch('/id/:id', authpassport,auth.required,updateUser);
router.delete('/id/:id',authpassport,auth.isAdmin, deleteUser);
router.get('/search/atributos',bringByAttributes);
router.get('/search/rol/:rol',authpassport,auth.required,bringByRol);
router.post('/logIn',logIn);
module.exports = router;