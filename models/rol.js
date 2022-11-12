const { Sequelize, DataTypes, Op } = require("sequelize");
const sequelize = require("../config/db");

const Rol = sequelize.define(
	"Roles",
	{
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		rol: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: true,
		},
		createdAt: DataTypes.DATE,
		updatedAt: DataTypes.DATE,
	}, {
		freezeTableName: true,
		timestamps: true,
	}, {
		hooks: {	
			beforeCreate: function (rol, options){ 				
				rol.createdAt = new Date();
				rol.updatedAt = new Date(); 			
				},
			beforeUpdate: function (rol, options) { 
				rol.updatedAt = new Date();
			},
		},
	},
);

module.exports = Rol;
