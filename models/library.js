const {
	Sequelize,
	DataTypes
} = require("sequelize");
const sequelize = require("../config/db");
const User = require("./users"); // declared but not used
const Book = require("./book");

const Library = sequelize.define("Library", {
	id: {
		type: DataTypes.INTEGER,
		autoIncrement: true,
		allowNull: false,
		primaryKey: true,
	},
	name: {
		type: DataTypes.STRING,
	},
	description: {
		type: DataTypes.TEXT,
	},
	createdAt: DataTypes.DATE,
	updatedAt: DataTypes.DATE,
}, {
	freezeTableName: true,
	timestamps: true,
}, {
	hooks: {
		beforeCreate: function (library, options) {
			library.createdAt = new Date();
			library.updatedAt = new Date();
		},
		beforeUpdate: function (library, options) {
			library.updatedAt = new Date();
		},
	},
}, );

const LibraryBooks = sequelize.define("LibraryBooks", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
     //FK to Library model/table
    LibraryId: {
    type: DataTypes.INTEGER,
    allowNull: false,    
    },
     //FK to Library model/table
    BookId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    favorite: {
      //ATTRIBUTE DESIGNED FOR FUTURE SPRINT-CREATE TOGGLE BUTTON IN FRONT
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue:false,
    },
		createdAt: DataTypes.DATE,
		updatedAt: DataTypes.DATE,
  }, {
    freezeTableName: true,
    timestamps: true,
  }, {
    hooks: {	
			beforeCreate: function (libraryBook, options){ 				
				libraryBook.createdAt = new Date();
				libraryBook.updatedAt = new Date(); 			
				},
			beforeUpdate: function (libraryBook, options) { 
				libraryBook.updatedAt = new Date();
			},
		},
	},
);

Library.belongsToMany(Book, {
	through: LibraryBooks
});
Book.belongsToMany(Library, {
	through: LibraryBooks
});
Library.hasMany(LibraryBooks);
LibraryBooks.belongsTo(Library);
Book.hasMany(LibraryBooks);
LibraryBooks.belongsTo(Book);

module.exports = Library;