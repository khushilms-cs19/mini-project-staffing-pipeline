'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('engagements', {
      engagement_id: {
        type: Sequelize.STRING,
        primaryKey: true,
        allowNull: false,
        defaultValue: Sequelize.UUIDV4
      },
      name: {
        type: Sequelize.STRING
      },
      tags: {
        type: Sequelize.ARRAY(Sequelize.STRING)
      },
      skills: {
        type: Sequelize.ARRAY(Sequelize.STRING)
      },
      guild: {
        type: Sequelize.ENUM('swe', 'product', 'data', 'unspecified')
      },
      user_ids: {
        type: Sequelize.ARRAY(Sequelize.STRING)
      },
      case_study_ids: {
        type: Sequelize.ARRAY(Sequelize.STRING)
      },
      status: {
        type: Sequelize.ENUM('upcoming', 'ongoing', 'completed', 'unspecified')
      },
      start_date: {
        type: Sequelize.DATE
      },
      end_date: {
        type: Sequelize.DATE
      },
      image: {
        type: Sequelize.STRING
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('engagements');
  }
};