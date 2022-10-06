const { Sequelize } = require('sequelize');
const User = require('../models/users');

function signUp(req, res){
    const body = req.body;
    body.membersince = new Date().toDateString();
    try{
    const user = await User.create(body).then(user =>{
    res.status(201).json(user);
    });
    } catch (err){
        if (["SequelizeValidationError", "SequelizeUniqueConstraintError"].includes(err.name) ) {
            return res.status(400).json({
            error: err.errors.map(e => e.message)
        })
         }
        else {
            throw err;
        }
}

}

async function getUser(req, res){
    const id = req.params.id;
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
    const id = req.params.id;
    const user = req.body;
    const update = await User.update(user,{where: {id}});
    const newUser = await User.findByPk(update[0]);
    res.status(200).json(newUser);
}

async function deleteUser(req, res){
    const id = req.params.id;
    const destruido = User.destroy({where: {id}});
    res.status(200).json({destruido});
}

async function bringByAttributes(req, res){
    const user = await User.findAll({attributes: ['username','firstname', 'email', 'rol']});
    res.status(200).json(user);
}
async function bringByRol(req, res){
    const rol = req.params.rol;
    const user = await User.findAll({where:{rol}});
    res.status(200).json(user);
}


module.exports = {
    signUp,
    getUser,
    getUsers,
    updateUser,
    deleteUser,
    bringByRol,
    bringByAttributes
}