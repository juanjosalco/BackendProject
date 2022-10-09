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
        type: DataTypes.STRING,
        allowNull: false
    },
    author: {
        type: DataTypes.STRING,
        allowNull: false
    },
    editorial: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    publication_date: {
        type: DataTypes.STRING,
        allowNull: false
    },
    category: {
        type: DataTypes.STRING,
        allowNull: false
    },
});

Book.hasOne(Category);
Book.hasOne(Editorial);
Editorial.hasMany(Book);
Category.hasMany(Book);

module.exports = Book;