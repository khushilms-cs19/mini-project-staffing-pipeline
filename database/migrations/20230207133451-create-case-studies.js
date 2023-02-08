'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('case_studies', {
      case_study_id: {
        type: Sequelize.STRING,
        primaryKey: true,
        allowNull: false,
        defaultValue: Sequelize.UUIDV4
      },
      name: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      collaborators_ids: {
        type: Sequelize.ARRAY(Sequelize.STRING)
      },
      image: {
        type: Sequelize.STRING
      },
      box_link: {
        type: Sequelize.STRING
      },
      engagement_id: {
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
    await queryInterface.dropTable('case_studies');
  }
};