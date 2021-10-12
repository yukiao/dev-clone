"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    return queryInterface.removeColumn("Likes", "nope").then(() => {
      return queryInterface
        .addColumn("Likes", "userId", {
          type: Sequelize.UUID,
          references: {
            model: "Users",
            key: "id",
          },
        })
        .then(() => {
          return queryInterface.addColumn("Likes", "postId", {
            type: Sequelize.UUID,
            references: {
              model: "Posts",
              key: "id",
            },
          });
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
      .addColumn("Likes", "nope", {
        type: Sequelize.STRING,
      })
      .then(() => {
        return queryInterface.removeColumn("Likes", "userId").then(() => {
          return queryInterface.removeColumn("Likes", "postId");
        });
      });
  },
};
