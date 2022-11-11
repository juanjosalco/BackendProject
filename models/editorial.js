const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Editorial = sequelize.define("Editorial", {
	id: {
		type: DataTypes.INTEGER,
		autoIncrement: true,
		allowNull: false,
		primaryKey: true,//UNCOMENTED DUE TO MIGRATIONS ASSKING for ID attibute
	},
	name: {
		type: DataTypes.STRING,
		//primaryKey: true,//COMENTED DUE TO MIGRATIONS ASSKING for ID attibute
	},
	country: {
		type: DataTypes.STRING,
	},
	editorial_desc: {
		type: DataTypes.TEXT,
	},
	},
	{
		freezeTableName: true,
		timestamps: true,
	}
);

module.exports = Editorial;
