"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("PostTags", {
      tagId: {
        type: Sequelize.UUID,
        primaryKey: true,
        references: {
          model: "Tags",
          key: "id",
        },
      },
      postId: {
        type: Sequelize.UUID,
        primaryKey: true,
        references: {
          model: "Posts",
          key: "id",
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("PostTags");
  },
};
