const { Sequelize, DataTypes, Op } = require("sequelize");
const sequelize = require("../config/db");
const User = require("./users");

const Order = sequelize.define(
	"Orders",
	{
		user_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			//FOREIGNKEYS
		},
		payment_amount: {
			type: DataTypes.DOUBLE,
			allowNull: false,
		},
		order_date: {
			type: DataTypes.DATE,
			allowNull: false,
		},
		createdAt: DataTypes.DATE,
		updatedAt: DataTypes.DATE,
	}, {
		freezeTableName: true,
		timestamps: true,
	}, {
		hooks: {	
			beforeCreate: function (orders, options){ 				
				orders.createdAt = new Date();
				orders.updatedAt = new Date(); 			
				},
			beforeUpdate: function (orders, options) { 
				orders.updatedAt = new Date();
			},
		},
	},
);

//FKrels between Tables
User.hasMany(Order, {
	foreignKey: "user_id",
	sourceKey: "id",
});
Order.belongsTo(User, {
	foreignKey: "user_id",
	targetKey: "id",
});

module.exports = Order;
