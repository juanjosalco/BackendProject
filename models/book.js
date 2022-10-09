const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Category = require('./category');
const Editorial = require('./editorial');
///
const Library = require('./libary');

//
const Book = sequelize.define('Book', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    book_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    author: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    publication_date: {
        type: DataTypes.STRING,
        allowNull: false
    },
    // category: {
    //     type: DataTypes.STRING,
        
    //     allowNull: false
    // },
});

Book.hasOne(Category);
Category.hasMany(Book);
Book.hasOne(Editorial);
Editorial.hasMany(Book);




module.exports = Book;