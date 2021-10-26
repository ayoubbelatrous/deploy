'use strict';



module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: { type: Sequelize.STRING, allowNull: false },
      description: { type: Sequelize.TEXT, allowNull: false },
      images_url: { type: Sequelize.STRING, allowNull: false },
      imagecount:{type:Sequelize.INTEGER,allowNull:false},
      price: { type: Sequelize.INTEGER, allowNull: false },
      stock: { type: Sequelize.INTEGER, allowNull: false },
      sales: { type: Sequelize.INTEGER, allowNull: false },
      approved: { type: Sequelize.BOOLEAN, allowNull: false },
      userId:
      {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('products');
  }
};