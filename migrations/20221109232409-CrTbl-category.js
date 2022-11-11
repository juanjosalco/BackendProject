'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable("Category", {
      id: { type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true },
      genre: { 
        type: Sequelize.STRING,
       //primaryKey: true,//COMENTED DUE TO MIGRATIONS ASSKING for ID attibute
        /*allowNull: false, 
        unique: true,*/
        //partes del modelo que creo faltan
        //no puede ser nulo
      },
      description: {
        type: Sequelize.TEXT,
        /*allowNull: true,*/
        //partes del modelo que creo faltan
        //pude ser nulo
      },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,
    });
  },
  
  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Category');
  }
};
