const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Editorial = sequelize.define('Editorial', {
    editorial_name: {
        type: DataTypes.CHAR(64)
    },
    country: {
        type: DataTypes.CHAR(256)
    },
    editorial_desc: {
        type: DataTypes.TEXT
    }
});

module.exports = Editorial;