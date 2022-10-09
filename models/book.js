const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Category = require('../models/category');
const Editorial = require('../models/editorial');

const Book = sequelize.define('Book', {
    book_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    book_name: {
        type: DataTypes.CHAR(256),
        allowNull: false
    },
    author: {
        type: DataTypes.CHAR(256),
        allowNull: false
    },
    editorial: {
        type: DataTypes.CHAR(256),
        allowNull: false,
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    publication_date: {
        type: DataTypes.CHAR(50),
        allowNull: false
    },
    category: {
        type: DataTypes.CHAR(256),
        allowNull: false
    },
});

Book.hasOne(Category);
Editorial.hasMany(Book);


module.exports = Book;