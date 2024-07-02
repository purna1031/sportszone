'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Sessions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      sport_id: {
        type: Sequelize.INTEGER
      },
      creator_id: {
        type: Sequelize.INTEGER
      },
      team1: {
        type: Sequelize.STRING
      },
      team2: {
        type: Sequelize.STRING
      },
      additional_players: {
        type: Sequelize.INTEGER
      },
      date: {
        type: Sequelize.DATE
      },
      venue: {
        type: Sequelize.STRING
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
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Sessions');
  }
};