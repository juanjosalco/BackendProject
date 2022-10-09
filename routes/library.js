const router = require('express').Router();
const auth = require('../config/auth')
const passport = require ('passport')

const authpassport = passport.authenticate('bearer',{session:false,assignProperty: 'user'})

const {
    getLibraries,
    getLibrary,
    createLibrary,
    updateLibrary,
    deleteLibrary
} = require('../controllers/library');

router.get('/', getLibraries);
router.get('/id/:id', authpassport,auth.required, getLibrary);
router.post('/create', authpassport,auth.required, createLibrary);

router.patch('/id/:id', authpassport,auth.required, updateLibrary);
router.delete('/id/:id', authpassport,auth.required, deleteLibrary);

module.exports = router;