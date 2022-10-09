const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const User = require('./users');
const Book = require('./book');

const Library = sequelize.define('Library', {
    name: {
        type: DataTypes.STRING
    },
    description: {
        type: DataTypes.TEXT
    }
});
Library.hasOne(User,{
    foreignKey: 'username'
});
User.belongsTo(Library);

Library.hasMany(Book,{
    foreignKey: 'book_id'
});
Book.belongsTo(Library);

module.exports = Library;