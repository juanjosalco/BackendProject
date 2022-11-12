const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../config/db");
const Library = require("./library");
const Book = require("./book");

const LibraryBook = sequelize.define(
	"LibraryBooks",
	{
		id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			allowNull: false,
			primaryKey: true,
		},
		description: {
			type: DataTypes.TEXT,
		},
		//FK to Library model/table
		library_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		//FK to Library model/table
		book_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		favorite: {
			//ATTRIBUTE DESIGNED FOR FUTURE SPRINT-CREATE TOGGLE BUTTON IN FRONT
			type: DataTypes.BOOLEAN,
			allowNull: true,
			defaultValue: false,
		},
	},
	{
		freezeTableName: true,
		timestamps: true,
	}
);

//FK to Library model/table
// LibraryBook.hasMany(Library, {
// 	foreignKey: "library_id",
// 	sourceKey: "id",
// });
// Library.belongsTo(LibraryBook, {
// 	foreignKey: "library_id",
// 	targetKey: "id",
// });
// LibraryBook.hasMany(Book, {
// 	foreignKey: "book_id",
// 	sourceKey: "id",
// });
// Book.belongsTo(LibraryBook, {
// 	foreignKey: "book_id",
// 	targetKey: "id",
// });
module.exports = LibraryBook;
