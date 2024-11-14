// routes/unitRoutes.js
const express = require("express");
const router = express.Router();
const unitController = require("../controllers/unitController");

// Rota para criar uma nova unidade
router.post("/", unitController.createUnit);

// Rota para obter todas as unidades
router.get("/", unitController.getAllUnits);

// Rota para atualizar uma unidade específica pelo ID
router.put("/:id", unitController.updateUnit);

// Rota para inativar uma unidade específica pelo ID
router.put("/:id/inactivate", unitController.inactivateUnit);

module.exports = router;
