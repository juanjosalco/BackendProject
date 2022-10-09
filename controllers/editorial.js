const { Sequelize } = require('sequelize');
const Editorial = require('../models/editorial');
const Book = require('../models/book');

function createEditorial(req, res){
    const body = req.body;
    Editorial.create(body).then(ed =>{
        res.status(201).json(ed);
    });
}

async function getEditorial(req, res){
    const name = req.params.name;
    
    const ed = await Editorial.findByPk(name,{
        include: Book
    });
    res.status(200).json(ed);
}

async function getEditorials(req, res){
    try{
    const editorials = await Editorial.findAll({
        include: Book
    });
    res.status(200).json(editorials);
    }
    catch (err){
        res.status(400).json({error : "Intenta refrescar la página"})
    }
}

async function updateEditorial(req, res){
    try{
        const name = req.params.name;
        const ed = req.body;
        const update = await Editorial.update(ed,{where: {name}});
        const newEd = await Editorial.findByPk(update[0]);
        res.status(200).json(newEd);
    } catch(error){
        res.status(400).json(error);
    }
    
}

async function deleteEditorial(req, res){
    const name = req.params.name;
    if(!Number(id)){
        
        return (res.status(400).json({error : "Try with numeric value"}))
    }
    const destruido = Editorial.destroy({where: {name}});
    res.status(200).json({destruido});
}

module.exports = {
    createEditorial,
    getEditorial,
    getEditorials,
    updateEditorial,
    deleteEditorial
}