const router = require('express').Router();
const auth = require('../config/auth')
const passport = require ('passport')
const authpassport = passport.authenticate('bearer',{session:false,assignProperty: 'user'})

const {
    getCategories,
    getCategory,
    updateCategory,
    createCategory,
    deleteCategory,

} = require('../controllers/category');

router.get('/',getCategories);
router.get('/id/:genre',authpassport,auth.required,getCategory);
router.post('/',authpassport,auth.isAdmin,createCategory);
router.patch('/id/:genre',authpassport,auth.required,updateCategory);
router.delete('/id/:genre',authpassport,auth.isAdmin, deleteCategory);

module.exports = router;