const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const User = require('./users');
const Book = require('./book');

const Library = sequelize.define('Library', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        
    },
    description: {
        type: DataTypes.TEXT
    }
});

Library.hasMany(Book,{
    foreignKey: 'id'
});
Book.hasMany(Library);

module.exports = Library;