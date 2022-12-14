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
	createdAt: DataTypes.DATE,
	updatedAt: DataTypes.DATE,
}, {
	freezeTableName: true,
	timestamps: true,
}, {
	hooks: {		
		beforeCreate: function (category, options){ 				
			category.createdAt = new Date();
			category.updatedAt = new Date(); 			
			},
		beforeUpdate: function (category, options) { 
			category.updatedAt = new Date();
		},
	},
},
);

module.exports = Category;
