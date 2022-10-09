const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const User = require('./users');
const Book = require('./book');

const Library = sequelize.define('Library', {
    name: {
        type: DataTypes.CHAR(256)
    },
    description: {
        type: DataTypes.TEXT
    },
    books: {
        type: DataTypes.CHAR(50)
    }
});
Library.hasOne(User);
Library.hasMany(Book);


module.exports = Library;