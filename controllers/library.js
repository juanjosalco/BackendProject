const Library = require('../models/libary');
const Book = require('../models/book');
const User = require('../models/users');

function createLibrary(req, res) {
    try {
        const body = req.body;
        Library.create(body).then(lib => {
            res.status(201).json(lib);
        });
    } catch (error) {
        res.status(400).json(error)
    }
}

async function getLibrary(req, res) {
    try {
        const id = req.params.id;

        if (!Number(id)) {

            return (res.status(400).json({ error: "Try with numeric value" }))
        }
        const lib = await Library.findByPk(id, {
            include: [
                { association: Library.hasMany(Book) },
                { association: Library.hasMany(User) }
            ]
        });
        if (!lib) {
            res.status(404).json({ mensaje: "id not found in DB, try with another id" })
        }
        res.status(200).json(lib);
    } catch (error) {
        res.status(400).json(error)
    }
}

async function getLibraries(req, res) {
    try {
        const lib = await Library.findAll({
            include: [
                { association: Library.hasMany(Book) },
            ]
        });
        res.status(200).json(lib);
    }
    catch (error) {
        res.status(400).json({ error: "Intenta refrescar la página" + error })
    }
}

async function updateLibrary(req, res) {
    try {
        const id = req.params.id;
        const lib = req.body;
        if (!Number(id)) {

            return (res.status(400).json({ error: "Try with numeric value" }))
        }
        const update = await Library.update(lib, { where: { id } });
        const newLib = await Library.findByPk(update[0]);
        res.status(200).json(newLib);
    } catch (error) {
        res.status(400).json(error)
    }

}

async function deleteLibrary(req, res) {
    try {
        const id = req.params.id;
        if (!Number(id)) {

            return (res.status(400).json({ error: "Try with numeric value" }))
        }
        const destruido = Library.destroy({ where: { id } });
        res.status(200).json({ destruido });
    } catch (error) {
        res.status(400).json(error)
    }
}

module.exports = {
    createLibrary,
    getLibraries,
    getLibrary,
    deleteLibrary,
    updateLibrary
}