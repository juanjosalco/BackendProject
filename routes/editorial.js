const router = require('express').Router();
const auth = require('../config/auth')
const passport = require ('passport')
const authpassport = passport.authenticate('bearer',{session:false,assignProperty: 'user'})

const {
    getEditorial,
    getEditorials,
    updateEditorial,
    deleteEditorial,
    createEditorial

} = require('../controllers/editorial');

router.get('/', getEditorials);
router.get('/id/:name',authpassport,auth.required, getEditorial);
router.post('/',authpassport,auth.isAdmin, createEditorial);
router.patch('/id/:name',authpassport,auth.isAdmin, updateEditorial);
router.delete('/id/:name',authpassport,auth.isAdmin, deleteEditorial);

module.exports = router;