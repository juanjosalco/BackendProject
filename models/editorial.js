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
	createdAt: DataTypes.DATE,
	updatedAt: DataTypes.DATE,
}, {
	freezeTableName: true,
	timestamps: true,
}, {
	hooks: {	
		beforeCreate: function (editorial, options){ 				
			editorial.createdAt = new Date();
			editorial.updatedAt = new Date(); 			
			},
		beforeUpdate: function (editorial, options) { 
			editorial.updatedAt = new Date();
		},
	},
},
);

module.exports = Editorial;
