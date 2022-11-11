'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('LibraryBooks', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
       //FK to Library model/table
      library_id: {
      type: Sequelize.INTEGER,
      references: {
        model: 'Library',
        key: 'id'
      },
      onDelete: 'CASCADE'
      },
      description: {
        type: Sequelize.TEXT,
      },
       //FK to Library model/table
      book_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Book',
          key: 'id'
        },
        onDelete: 'CASCADE'
      },
      favorite: {
        //ATTRIBUTE DESIGNED FOR FUTURE SPRINT-CREATE TOGGLE BUTTON IN FRONT
        type: Sequelize.BOOLEAN,
        allowNull: true,
        defaultValue:false,
      },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,
    });
  },
  //CHECK THE NUMBER OF FK FROM THE Models, TOTAL 2 Remember Model if exists
  /*LibraryBook.hasMany(Library,{
    foreignKey: "user_id",
    sourceKey: "id",
  });
    Library.belongsTo(LibraryBook,{
    foreignKey: "user_id",
    targetKey: "id",
  });
    LibraryBook.hasMany(Book,{
    foreignKey: "user_id",
    sourceKey: "id",
  });
    Book.belongsTo(LibraryBook,{
    foreignKey: "user_id",
    targetKey: "id",
  });*/
  
  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('LibraryBooks');
  }
};
