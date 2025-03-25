"use strict";
const {Model} = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Country extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Country.hasMany(models.Favorite, {foreignKey: "CountryId"});
      // define association here
    }
  }
  Country.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {msg: "Country name is required"},
        },
      },
      capital: DataTypes.STRING,
      region: DataTypes.STRING,
      population: {
        type: DataTypes.INTEGER,
        validate: {
          min: {args: [0], msg: "Population cannot be negative"},
        },
      },
      flagUrl: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Country",
    }
  );
  return Country;
};
