const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const crypto = require('node:crypto');

/**
 * @swagger
 * /users/:
 * get:
 *      
 */
const jwt = require('jsonwebtoken') // Genera los JWT
const secret = require ('../config/secret')

const User = sequelize.define('User', {
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        primaryKey: true,
        validate:{
            isLowercase: true, 
            is: /^[a-zA-Z0-9_-]+$/
        }
    },
   
    firstname: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastname:{
        type: DataTypes.STRING,
        allowNull:false
    },
    address: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate:{
            isEmail: true // se revisa que el dato sea un email
        }
    },
    userpass: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password_hash: {
        type: DataTypes.TEXT(1024),
        allowNull: true,
    },
    password_salt: {
        type: DataTypes.TEXT(1024),
        allowNull: true,
    },
    phonenumber: {
        type: DataTypes.STRING
    },
    membersince: {
        type: DataTypes.STRING,
        allowNull: false,
        
    },
    rol: {
        type: DataTypes.STRING,
        allowNull: true //especifica el rol
    }
});


User.createPassword = function(plainText){
    const salt = crypto.randomBytes(16).toString('hex') //generador de salt aleatorio
    const hash = crypto.pbkdf2Sync(plainText, salt, 10000, 512,"sha512").toString("hex") //creacion de hash
    return {salt : salt, hash: hash}
}

User.validatePassword = function(password,user_salt, user_hash){
    const hash = crypto
        .pbkdf2Sync(password, user_salt, 10000, 512,"sha512")
        .toString("hex")
    return  user_hash === hash;
}

User.generateJWT = function(user) {
    const today = new Date();
    const exp = new Date(today);
    exp.setDate(today.getDate() + 30);// 1 mes
  

    return jwt.sign({
        user: user.username,
        role: user.rol,
        exp: parseInt(exp.getTime() / 1000) // En segundos
    }, secret);
 }
module.exports = User;