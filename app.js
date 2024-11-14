const express = require("express");
const app = express();
const authRoutes = require("./routes/authRoutes");
const equipmentRoutes = require("./routes/equipmentRoutes");
const loanRoutes = require("./routes/loanRoutes");
const unitRoutes = require("./routes/unitRoutes");

app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/equipment", equipmentRoutes);
app.use("/api/loan", loanRoutes);
app.use("/api/unit", unitRoutes);

module.exports = app;
