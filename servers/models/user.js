"use strict";
const {Model} = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.hasMany(models.Favorite, {foreignKey: "UserId"});
      // define association here
    }
  }
  User.init(
    {
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {msg: "Username is required"},
        },
      },

      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: {msg: "Email must be unique"},
        validate: {
          notEmpty: {msg: "Email is required"},
          isEmail: {msg: "Invalid email format"},
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {msg: "Password is required"},
          len: {args: [6], msg: "Password must be at least 6 characters"},
        },
      },
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
