const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../config/db");
const Category = require("./category");
const Editorial = require("./editorial");
const Author = require("./authors");

// const Library = require("./libary"); // declared but not used

const Book = sequelize.define(
	"Book",
	{
		id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			allowNull: false,
			primaryKey: true,
		},
		book_name: {
			type: DataTypes.STRING,
			allowNull: false,
		}, //Not required after author model is created.

		/*author: { SHOULD BE authorId BY ASSOCIATIONS-RELATIONS 
		type: DataTypes.STRING,
		allowNull: false,
	},*/

		description: {
			type: DataTypes.TEXT,
			allowNull: false,
		},
		publication_date: {
			type: DataTypes.STRING,
			allowNull: false,
		},

		///Not required after category model is created.
		/*category: { SHOULD BE categoryId BY ASSOCIATIONS-RELATIONS 
        type: DataTypes.STRING,
        allowNull: false,
      },*/
		//Not in model, declared on Associations area in models.
		/*editorial: { CREATED BY ASSOCIATIONS-RELATIONS  EditorialId
        type: DataTypes.STRING,
        allowNull: false,
      },*/
	},
	{
		freezeTableName: true,
		timestamps: true,
	},
	{
		drop: true,
		cascade: true,
	}
);

Book.belongsTo(Category);

Category.hasMany(Book);

Book.belongsTo(Editorial);

Editorial.hasMany(Book);

Book.belongsTo(Author);

Author.hasMany(Book);

module.exports = Book;
