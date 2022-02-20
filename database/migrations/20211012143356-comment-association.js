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
      .addColumn("Comments", "userId", {
        type: Sequelize.UUID,
        references: {
          model: "Users",
          key: "id",
        },
      })
      .then(() => {
        return queryInterface.addColumn("Comments", "postId", {
          type: Sequelize.UUID,
          references: {
            model: "Posts",
            key: "id",
          },
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
    return queryInterface.removeColumn("Comments", "userId").then(() => {
      return queryInterface.removeColumn("Comments", "postId");
    });
  },
};
