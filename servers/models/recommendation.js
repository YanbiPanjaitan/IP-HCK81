"use strict";
const {Model} = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Recommendation extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Recommendation.belongsTo(models.Favorite, {foreignKey: "FavoriteId"});
      // define association here
    }
  }
  Recommendation.init(
    {
      FavoriteId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notEmpty: {msg: "FavoriteId is required"},
        },
      },
      landmarkName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {msg: "Landmark name is required"},
        },
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          notEmpty: {msg: "Description is required"},
        },
      },
    },
    {
      sequelize,
      modelName: "Recommendation",
    }
  );
  return Recommendation;
};
