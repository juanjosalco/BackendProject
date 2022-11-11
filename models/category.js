const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Category = sequelize.define("Category", {
	id: {
		type: DataTypes.INTEGER,
		autoIncrement: true,
		allowNull: false,
		primaryKey: true,//UNCOMENTED DUE TO MIGRATIONS ASSKING for ID attibute
	},
	genre: {
		type: DataTypes.STRING,
		//primaryKey: true,//COMENTED DUE TO MIGRATIONS ASSKING for ID attibute
	},
	description: {
		type: DataTypes.STRING,
	},
	},
	{
		freezeTableName: true,
		timestamps: true,
	}
);


module.exports = Category;
