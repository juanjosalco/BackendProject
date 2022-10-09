const { Sequelize } = require('sequelize');
const Editorial = require('../models/editorial');

function createEditorial(req, res){
    const body = req.body;
    Editorial.create(body).then(ed =>{
        res.status(201).json(ed);
    });
}

async function getEditorial(req, res){
    const id = req.params.id;
    if(!Number(id)){
        
        return (res.status(400).json({error : "Try with numeric value"}))
    }
    const ed = await Editorial.findByPk(id);
    res.status(200).json(ed);
}

async function getEditorials(req, res){
    try{
    const editorials = await Editorial.findAll();
    res.status(200).json(editorials);
    }
    catch (err){
        res.json(err)
    }
}

async function updateEditorial(req, res){
    const id = req.params.id;
    if(!Number(id)){
        
        return (res.status(400).json({error : "Try with numeric value"}))
    }
    const ed = req.body;
    const update = await Editorial.update(ed,{where: {id}});
    const newEd = await Editorial.findByPk(update[0]);
    res.status(200).json(newEd);
}

async function deleteEditorial(req, res){
    const id = req.params.id;
    if(!Number(id)){
        
        return (res.status(400).json({error : "Try with numeric value"}))
    }
    const destruido = Editorial.destroy({where: {id}});
    res.status(200).json({destruido});
}

module.exports = {
    createEditorial,
    getEditorial,
    getEditorials,
    updateEditorial,
    deleteEditorial
}