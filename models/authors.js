const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Author = sequelize.define("Authors", {
	id: {
		type: DataTypes.INTEGER,
		autoIncrement: true,
		allowNull: false,
		primaryKey: true,
	},
	name: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	bio: {//biography
		type: DataTypes.TEXT,
		allowNull: true,
	},
	prizes: {//premios-prizes
		type: DataTypes.TEXT,
		allowNull: true,
	},
	createdAt: DataTypes.DATE,
	updatedAt: DataTypes.DATE,
},{
	hooks: {		
		beforeCreate: function (author, options){ 				
			author.createdAt = new Date();
			author.updatedAt = new Date(); 			
			},
		beforeUpdate: function (author, options) { 
			author.updatedAt = new Date();
		},
	},
},	
{
	freezeTableName: true,
	timestamps: true,
}
);

module.exports = Author;
