"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class PostTag extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      PostTag.belongsTo(models.Post, {
        foreignKey: "postId",
      });
      PostTag.belongsTo(models.Tag, {
        foreignKey: "tagId",
      });
    }
  }
  PostTag.init(
    {
      tagId: { type: DataTypes.UUID, primaryKey: true },
      postId: { type: DataTypes.UUID, primaryKey: true },
    },
    {
      sequelize,
      modelName: "PostTag",
    }
  );
  return PostTag;
};
