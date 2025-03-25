"use strict";
const {Model} = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Favorite extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Favorite.belongsTo(models.User, {foreignKey: "UserId"});
      Favorite.belongsTo(models.Country, {foreignKey: "CountryId"});
      Favorite.hasMany(models.Recommendation, {foreignKey: "FavoriteId"});
    }
    // define association here
  }
  Favorite.init(
    {
      UserId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notEmpty: {msg: "UserId is required"},
        },
      },
      CountryId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notEmpty: {msg: "CountryId is required"},
        },
      },
      notes: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Favorite",
    }
  );
  return Favorite;
};
