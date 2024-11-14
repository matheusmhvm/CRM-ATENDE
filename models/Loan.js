// models/Loan.js
const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");
const Equipment = require("./Equipment"); // Relacionamento com Equipment

const Loan = sequelize.define("Loan", {
  borrowerName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  equipmentId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Equipment,
      key: "id",
    },
  },
  status: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: "Em andamento",
  },
});

Equipment.hasMany(Loan, { foreignKey: "equipmentId" });
Loan.belongsTo(Equipment, { foreignKey: "equipmentId" });

module.exports = Loan;
