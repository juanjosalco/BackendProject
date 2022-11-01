const { Sequelize, DataTypes, Op } = require("sequelize");
const sequelize = require("../config/db");

const Rol = sequelize.define(
	"Roles",
	{
		rol: {
			type: DataTypes.TEXT,
			allowNull:false,
		    unique:true,
			isLowercase: true
		},
	},
	{
		freezeTableName: true,
		timestamps: false,
	}
);

module.exports = Rol;