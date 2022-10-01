const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const User = sequelize.define('User', {
    username: {
        type: DataTypes.CHAR(256),
        allowNull: false
    },
    userpass: {
        type: DataTypes.CHAR(30),
        allowNull: false
    },
    firstname: {
        type: DataTypes.CHAR(256),
        allowNull: false
    },
    address: {
        type: DataTypes.CHAR(256),
        allowNull: false
    },
    email: {
        type: DataTypes.CHAR(256),
        allowNull: false
    },
    phonenumber: {
        type: DataTypes.INTEGER
    },
    membersince: {
        type: DataTypes.CHAR(64),
        allowNull: false
    },
    rol: {
        type: DataTypes.CHAR(256),
        allowNull: false
    }
});

module.exports = User;