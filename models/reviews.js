const { Sequelize, DataTypes, Op } = require("sequelize");
const sequelize = require("../config/db");
const Book = require("./book");
const User = require("./users");

const Review = sequelize.define(
	"Reviews",
	{
		review: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		rating: {
			type: DataTypes.DOUBLE,
			allowNull: false,
			defaultValue: 0, // 5/2=2.5 NEUTRAL Answer ,5 All right,0 NOTHING
		},
		user_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			//FOREIGNKEYS
		},
		book_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			//FOREIGNKEYS
		},
		createdAt: DataTypes.DATE,
		updatedAt: DataTypes.DATE,
	}, {
		freezeTableName: true,
		timestamps: true,
	}, {
		hooks: {		
			beforeCreate: function (review, options){ 				
				review.createdAt = new Date();
				review.updatedAt = new Date(); 			
				},
			beforeUpdate: function (review, options) { 
				review.updatedAt = new Date();
			},
		},
	},
);

//FKrels between Tables
User.hasMany(Review, {
	foreignKey: "user_id",
	sourceKey: "id",
});
Review.belongsTo(User, {
	foreignKey: "user_id",
	targetKey: "id",
});

Book.hasMany(Review, {
	foreignKey: "book_id",
	sourceKey: "id",
});
Review.belongsTo(Book, {
	foreignKey: "book_id",
	targetKey: "id",
});

module.exports = Review;
