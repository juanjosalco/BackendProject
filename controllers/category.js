const { Sequelize } = require('sequelize');
const Category = require('../models/category');

function createCategory(req, res){
    const body = req.body;
    Category.create(body).then(cat =>{
        res.status(201).json(cat);
    });
}

async function getCategory(req, res){
    const id = req.params.id;
    const cat = await Category.findByPk(id);
    res.status(200).json(cat);
}

async function getCategories(req, res){
    try{
    const categories = await Category.findAll();
    res.status(200).json(categories);
    }
    catch (err){
        res.json(err)
    }
}

async function updateCategory(req, res){
    const id = req.params.id;
    const cat = req.body;
    const update = await Category.update(cat,{where: {id}});
    const newCat = await Category.findByPk(update[0]);
    res.status(200).json(newCat);
}

async function deleteCategory(req, res){
    const id = req.params.id;
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