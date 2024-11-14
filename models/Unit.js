// models/Unit.js
const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Unit = sequelize.define("Unit", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  location: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  status: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: true, // true para ativo, false para inativo
  },
});

module.exports = Unit;
