"use strict";
const bcrypt = require("bcryptjs");
const { Model } = require("sequelize");
const { nullValueMessage } = require("../../helpers/dbValidationError");

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Post, {
        foreignKey: "userId",
      });
      User.hasMany(models.Like, {
        foreignKey: "userId",
      });
      User.hasMany(models.Comment, {
        foreignKey: "userId",
      });
    }

    async validatePassword(password) {
      return await bcrypt.compare(password, this.password);
    }
  }
  User.init(
    {
      id: {
        allowNull: false,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        type: DataTypes.UUID,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: nullValueMessage("name"),
          },
        },
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: nullValueMessage("email"),
          },
        },
      },
      profilePicture: DataTypes.STRING,
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: nullValueMessage("username"),
          },
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: nullValueMessage("password"),
          },
        },
      },
    },
    {
      sequelize,
      modelName: "User",
      hooks: {
        beforeCreate: async (user) => {
          const salt = await bcrypt.genSalt(10);
          user.password = await bcrypt.hash(user.password, salt);
        },
      },
      // instanceMethods: {
      //   validatePassword: async (password) => {
      //     return await bcrypt.compare(password, this.password);
      //   },
      // },
    }
  );
  return User;
};
