const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Editorial = sequelize.define('Editorial', {
    editorial_name: {
        type: DataTypes.STRING,
        primaryKey: true
    },
    country: {
        type: DataTypes.STRING
    },
    editorial_desc: {
        type: DataTypes.TEXT
    }
});

module.exports = Editorial;