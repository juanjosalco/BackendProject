const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/db');

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

module.exports = Book;