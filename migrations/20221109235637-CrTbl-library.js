"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {

  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Library', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      name: {
        type: Sequelize.STRING,
      },
      description: {
        type: Sequelize.TEXT,
      },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,
    });
  },
  //CHECK THE NUMBER OF FK FROM THE Models, TOTAL 0 AS the relations are moving at LibraryBook Table
  /*Library.hasMany(Book);

    Book.belongsTo(Library);*/

	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable("Library");
	},
};
