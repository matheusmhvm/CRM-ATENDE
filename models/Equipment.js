// models/Equipment.js
const { DataTypes } = require("sequelize");
const sequelize = require("../config/db"); // Certifique-se de que o arquivo de conexão está configurado corretamente

const Equipment = sequelize.define("Equipment", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  model: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  brand: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  color: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  patrimony: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  type: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  status: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: "Disponível",
  },
});

module.exports = Equipment;
