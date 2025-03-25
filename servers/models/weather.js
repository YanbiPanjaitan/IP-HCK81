"use strict";
const {Model} = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Weather extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Weather.belongsTo(models.Country, {foreignKey: "CountryId"});
    }
  }
  Weather.init(
    {
      CountryId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "Countries",
          key: "id",
        },
        validate: {
          notNull: {
            msg: "Country ID is required",
          },
          notEmpty: {
            msg: "Country ID is required",
          },
        },
      },
      temperature: {
        type: DataTypes.FLOAT,
        validate: {
          isFloat: {
            msg: "Temperature must be a number",
          },
        },
      },
      humidity: {
        type: DataTypes.FLOAT,
        validate: {
          isFloat: {
            msg: "Humidity must be a number",
          },
          min: {
            args: [0],
            msg: "Humidity cannot be negative",
          },
          max: {
            args: [100],
            msg: "Humidity cannot exceed 100%",
          },
        },
      },
      windSpeed: {
        type: DataTypes.FLOAT,
        validate: {
          isFloat: {
            msg: "Wind speed must be a number",
          },
          min: {
            args: [0],
            msg: "Wind speed cannot be negative",
          },
        },
      },
      description: DataTypes.STRING,
      icon: DataTypes.STRING,
      updatedTime: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "Weather",
      tableName: "Weather", // Explicitly set table name since it's singular
    }
  );
  return Weather;
};
