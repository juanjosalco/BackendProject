'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('LibraryUser', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
       //FK to Library model/table
      LibraryId: {
      type: Sequelize.INTEGER,
      references: {
        model: 'Library',
        key: 'id'
      },
      onDelete: 'CASCADE'
      },
       //FK to Library model/table
      UserId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'User',
          key: 'id'
        },
        onDelete: 'CASCADE'
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
    await queryInterface.dropTable('LibraryUser');
  }
};
