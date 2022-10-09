const {Sequelize} = require('sequelize');
const book = require('../models/book');
const Category =  require('../models/category') 
const Editorial = require('../models/editorial')

function createBook (req,res) {
    const body = req.body;
    book.create(body).then(bk =>{
        res.status(201).json(bk);
    }
    );    
}

async function getBook(req,res){
    const id = req.params.id;
    if(!Number(id)){
        
        return (res.status(400).json({error : "Try with numeric value"}))
    }
    const bk = await book.findByPk(id,
        {
            include: [{association: book.hasOne(Category),
                association: book.hasOne(Editorial)}]
        });
    res.status(200).json(bk);
}

async function getBooks(req,res){
    try{
        const books = await book.findAll({
            include: [{association: book.hasOne(Category),
                association: book.hasOne(Editorial)}]
        });
        res.status(200).json(books)
    }
    catch (err){
        res.status(400).json({error : "Intenta refrescar la página " + error})

    }
}

async function updateBook(req,res){
    const id = req.params.id;
    if(!Number(id)){
        
        return (res.status(400).json({error : "Try with numeric value"}))
    }
    const bk = req.body;
    const update = await book.update(bk,{where : {id}})
    const newbk = await book.findByPk(update[0]);
    res.status(200).json(newbk);

}

function deleteBook(){
    const id = req.params.id;
    if(!Number(id)){
        
        return (res.status(400).json({error : "Try with numeric value"}))
    }
    const destruido = book.destroy({where: {id}});

    res.status(200).json({destruido});
    return
}

module.exports= {
    createBook,
    getBook,
    getBooks,
    updateBook,
    deleteBook,
}