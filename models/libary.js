const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const User = require('./users');
const Book = require('./book');

const Library = sequelize.define('Library', {
    name: {
        type: DataTypes.STRING,
        
    },
    description: {
        type: DataTypes.TEXT
    }
});
Library.hasOne(User,{
    foreignKey: 'username'
});
User.hasOne(Library,{
    foreignKey: 'id_library'
});

Library.hasMany(Book,{
    foreignKey: 'book_id'
});
Book.hasMany(Library);

module.exports = Library;