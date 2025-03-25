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
      // define association here
      Favorite.belongsTo(models.User, {foreignKey: "UserId"});
      Favorite.belongsTo(models.Country, {foreignKey: "CountryId"});
      Favorite.hasMany(models.Recommendation, {foreignKey: "FavoriteId"});
    }
  }
  Favorite.init(
    {
      UserId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: {
            msg: "User ID is required",
          },
        },
      },
      CountryId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Country ID is required",
          },
        },
      },
      note: {
        type: DataTypes.TEXT,
      },
      visited: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      visitingDate: {
        type: DataTypes.DATE,
        validate: {
          isDate: {
            msg: "Invalid date format",
          },
        },
      },
    },
    {
      sequelize,
      modelName: "Favorite",
    }
  );
  return Favorite;
};
