const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Book = require("./book");

const Author = sequelize.define("Authors", {
	id: {
		type: DataTypes.INTEGER,
		autoIncrement: true,
		allowNull: false,
		primaryKey: true,
	},
	name: {
		type: DataTypes.STRING,
	},
	description: {
		type: DataTypes.TEXT,
	},
});

Author.hasMany(Book);
Book.belongsTo(Author);

module.exports = Author;
