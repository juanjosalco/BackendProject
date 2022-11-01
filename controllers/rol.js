//FromS5
const { Sequelize, DataTypes, Op } = require('sequelize');
const Rol = require('../models/rol');

function createRol(req, res) {
    const body = req.body;
    Rol.create(body).then(rol => {
        res.status(201).json(rol);
    });
}

async function getRol(req, res) {
    const id = req.params.id;
    const rol = await Rol.findByPk(id);
    res.status(200).json(rol);
}

async function getRoles(req, res) {
    const roles = await Rol.findAll();
    res.status(200).json(roles);    
}

async function updateRol(req, res) {
    const id = req.params.id;
    const rol = req.body;
    await Rol.update(rol, {where: {id: id}});
    const rol_updated = await Rol.findByPk(id);
    res.status(200).json(rol_updated);
}

async function deleteRol(req, res) {
    const id = req.params.id;
    const deleted = Rol.destroy(
        {where: {id: id} }
    );
    res.status(200).json(deleted);
}

module.exports = {
    createRol,
    getRol,
    getRoles,
    updateRol,
    deleteRol
}