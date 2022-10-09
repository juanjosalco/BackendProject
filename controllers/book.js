const { Sequelize } = require('sequelize');
const book = require('../models/book');
const Category = require('../models/category')
const Editorial = require('../models/editorial');
const Library = require('../models/libary');

function createBook(req, res) {
    try {
        const body = req.body;
        book.create(body).then(bk => {
            res.status(201).json(bk);
        }
        );
    } catch (error) {
        res.status(400).json(error);
    }

}

async function getBook(req, res) {
    try {
        const id = req.params.id;
        if (!Number(id)) {

            return (res.status(400).json({ error: "Try with numeric value" }))
        }
        const bk = await book.findByPk(id,
            {
                include: [
                    { association: book.belongsTo(Editorial) },
                    { association: book.belongsTo(Library) },
                    { association: book.belongsTo(Category) }
                ]
            });
        res.status(200).json(bk);
    } catch (error) {
        res.status(400).json(error)
    }
}

async function getBooks(req, res) {
    try {
        const books = await book.findAll({

            include: [{ association: book.belongsTo(Editorial) },
            { association: book.belongsTo(Library) },
            { association: book.belongsTo(Category) }]
        });
        res.status(200).json(books)
    }
    catch (err) {
        res.status(400).json({ error: "Intenta refrescar la página " + error })

    }
}

async function updateBook(req, res) {
    try {
        const id = req.params.id;
        if (!Number(id)) {

            return (res.status(400).json({ error: "Try with numeric value" }))
        }
        const bk = req.body;
        const update = await book.update(bk, { where: { id } })
        const newbk = await book.findByPk(update[0]);
        res.status(200).json(newbk);
    } catch (error) {
        res.status(400).json(error);
    }

}

function deleteBook() {
    try {
        const id = req.params.id;
        if (!Number(id)) {

            return (res.status(400).json({ error: "Try with numeric value" }))
        }
        const destruido = book.destroy({ where: { id } });

        res.status(200).json({ destruido });
        return
    } catch (error) {
        res.status(400).json(error)
    }
}

module.exports = {
    createBook,
    getBook,
    getBooks,
    updateBook,
    deleteBook,
}