const router = require('express').Router();

const {
    getLibraries,
    getLibrary,
    createLibrary,
    updateLibrary,
    deleteLibrary
} = require('../controllers/library');

router.get('/', getLibraries);
router.get('/id/:id', getLibrary);
router.post('/create', createLibrary);

router.patch('/id/:id', updateLibrary);
router.delete('/id/:id', deleteLibrary);

module.exports = router;