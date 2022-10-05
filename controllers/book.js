const {sequelize} = require('sequelize');
const book = require('../models/book');

function createBook (req,res) {
    const body = req.body;
    book.create(body).then(bk =>{
        res.status(201).json(bk);
    }
    );    
}

async function getBook(req,res){
    const id = req.params.id;
    const bk = await book.findByPk(id);
    res.status(200).json(bk);
}

async function getBooks(req,res){
    try{
        const books = await book.findAll();
        res.status(200).json(books)
    }
    catch (err){
        res.json(err)

    }
}

async function updateBook(req,res){
    const id = req.params.id;
    const bk = req.body;
    const update = await book.update(bk,{where : {id}})
    const newbk = await book.findByPk(update[0]);
    res.status(200).json(newbk);

}

function deleteBook(){
    const id = req.params.id;
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