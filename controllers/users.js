const { where } = require('sequelize');
const User = require('../models/users');

function createUser(req, res){
    const body = req.body;
    User.create(body).then(user =>{
        res.status(201).json(user);
    });
}

async function getUser(req, res){
    const id = req.params.id_user;
    const user = await User.findByPk(id);
    res.status(200).json(user);
}

async function getUsers(req, res){
    try{
    const users = await User.findAll();
    res.status(200).json(users);
    }
    catch (err){
        res.json(err)
    }
}

async function updateUser(req, res){
    const id = req.params.id_user;
    const user = req.body;
    const update = await User.update(user,{where: {id}});
    const newUser = await User.findByPk(update[0]);
    res.status(200).json(newUser);
}

async function deleteUser(req, res){
    const id = req.params.id_user;
    const destruido = User.destroy({where: {id}});
    res.status(200).json(destruido);
}

module.exports = {
    createUser,
    getUser,
    getUsers,
    updateUser,
    deleteUser
}