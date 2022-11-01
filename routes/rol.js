const router=require('express').Router();

const {
    createRol,
    getRol,
    getRoles,
    updateRol,
    deleteRol
}=require('../controllers/rol');

router.get('/',getRoles);
router.get('/:id',getRol);
router.post('/',createRol);
router.patch('/:id',updateRol);
router.delete('/:id',deleteRol);

module.exports=router;