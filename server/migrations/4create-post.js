'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Posts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      slug: {
        type: Sequelize.STRING
      },
      summary: {
        type: Sequelize.STRING
      },
      content: {
        type: Sequelize.STRING
      },
      featuredImage: {
        type: Sequelize.STRING
      },
      userId: {
        type: Sequelize.INTEGER,
        onDelete : 'CASCADE',
        references : {
            model : 'Users',
            key : 'id',
            as : 'userId'
        }
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
    await queryInterface.dropTable('Posts');
  }
};