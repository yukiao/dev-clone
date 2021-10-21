"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    return queryInterface
      .changeColumn("Tags", "tagName", {
        type: Sequelize.STRING(50),
        allowNull: false,
      })
      .then(() => {
        return queryInterface.addColumn("Tags", "description", {
          type: Sequelize.STRING,
          allowNull: false,
        });
      });
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    return queryInterface
      .changeColumn("Tags", "tagName", {
        type: Sequelize.STRING,
        allowNull: false,
      })
      .then(() => {
        return queryInterface.removeColumn("Tags", "description");
      });
  },
};
