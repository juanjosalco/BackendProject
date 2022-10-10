const { Sequelize } = require('sequelize');
const Editorial = require('../models/editorial');
const Book = require('../models/book');

function createEditorial(req, res) {
    try {
        const body = req.body;
        Editorial.create(body).then(ed => {
            res.status(201).json(ed);
        });
    } catch (error) {
        res.status(400).json({ "info": "Error in request",
                                error : "description " + error})
    }
}

async function getEditorial(req, res) {
    try {
        const name = req.params.name;

        const ed = await Editorial.findByPk(name, {
            include: Book
        });
        res.status(200).json(ed);
    } catch (error) {
        res.status(400).json({ "info": "Error in request",
                                error : "description " + error})
    }
}

async function getEditorials(req, res) {
    try {
        const editorials = await Editorial.findAll({
            include: Book
        });
        res.status(200).json(editorials);
    }
    catch (err) {
        res.status(400).json({ "info": "Error in request",
                                error : "description " + error})
    }
}

async function updateEditorial(req, res) {
    try {
        const name = req.params.name;
        const ed = req.body;

        const newEd = await Editorial.findByPk(name);

        for (const key in ed) {
                     
            if (!newEd[key] && newEd[key] != null){
              console.log("no encontrado")
              return res.status(400).json({Error: "Attribute not update, attribute not valid"})
            }
          
      }


        const update = await Editorial.update(ed, { where: { name } });
        
        res.status(200).json({status : "Attribute was updated",
                               ed: ed });

    } catch (error) {
        res.status(400).json({ "info": "Error in request",
                                error : "description " + error})
    }

}

async function deleteEditorial(req, res) {
    try {
        const name = req.params.name;
        if (!Number(id)) {

            return (res.status(400).json({ error: "Try with numeric value" }))
        }
        const destruido = Editorial.destroy({ where: { name } });
        res.status(200).json({ destruido });
    } catch (error) {
        res.status(400).json({ "info": "Error in request",
                                error : "description " + error})
    }
}

module.exports = {
    createEditorial,
    getEditorial,
    getEditorials,
    updateEditorial,
    deleteEditorial
}