const router = require('express').Router();

const {
    getEditorial,
    getEditorials,
    updateEditorial,
    deleteEditorial,
    createEditorial

} = require('../controllers/editorial');

router.get('/', getEditorials);
router.get('/id/:id', getEditorial);
router.post('/', createEditorial);
router.patch('/id/:id', updateEditorial);
router.delete('/id/:id', deleteEditorial);

module.exports = router;