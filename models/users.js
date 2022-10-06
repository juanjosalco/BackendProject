const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const User = sequelize.define('User', {
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
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
        type: DataTypes.STRING,
        allowNull: true,
    },
    password_salt: {
        type: DataTypes.STRING,
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

module.exports = User;