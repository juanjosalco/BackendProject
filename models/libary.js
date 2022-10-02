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
Library.hasMany(User);
Library.hasMany(Book);
User.belongsTo(Library);
Book.belongsTo(Library);

module.exports = Library;