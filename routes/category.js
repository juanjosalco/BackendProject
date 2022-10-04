const router = require('express').Router();

const {
    getCategories,
    getCategory,
    updateCategory,
    createCategory,
    deleteCategory,

} = require('../controllers/category');

router.get('/', getCategories);
router.get('/id/:id', getCategory);
router.post('/', createCategory);
router.patch('/id/:id', updateCategory);
router.delete('/id/:id', deleteCategory);

module.exports = router;