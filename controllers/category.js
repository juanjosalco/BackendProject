const { Sequelize } = require('sequelize');
const Category = require('../models/category');

function createCategory(req, res){
    const body = req.body;
    Category.create(body).then(cat =>{
        return res.status(201).json(cat);
    });
}

async function getCategory(req, res){
    const id = req.params.id;
    if(!Number(id)){
        
        return (res.status(400).json({error : "Try with numeric value"}))
    }
    const cat = await Category.findByPk(id);
    res.status(200).json(cat);
}

async function getCategories(req, res){
    try{
    const categories = await Category.findAll();
    res.status(200).json(categories);
    }
    catch (err){
        res.status(400).json({error : "Intenta refrescar la página"})
    }
}

async function updateCategory(req, res){
    const genre = req.params.genre;
    const cat = req.body;
    const update = await Category.update(cat,{where: {genre}});
    const newCat = await Category.findByPk(update[0]);
    res.status(200).json(newCat);
}

async function deleteCategory(req, res){
    const id = req.params.id;
    if(!Number(id)){
        
        return (res.status(400).json({error : "Try with numeric value"}))
    }
    const destruido = Category.destroy({where: {id}});
    res.status(200).json({destruido});
}

module.exports = {
    createCategory,
    updateCategory,
    getCategories,
    getCategory,
    deleteCategory
}