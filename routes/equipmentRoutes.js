// routes/equipmentRoutes.js
const express = require("express");
const router = express.Router();
const equipmentController = require("../controllers/equipmentController"); // Verifique o caminho correto

// Rota para criar um novo equipamento
router.post("/create", equipmentController.createEquipment);

// Rota para listar todos os equipamentos
router.get("/", equipmentController.getAllEquipments);

// Rota para editar um equipamento pelo ID
router.put("/:id", equipmentController.updateEquipment);

// Rota para inativar um equipamento pelo ID
router.put("/:id/inactivate", equipmentController.inactivateEquipment);

module.exports = router;
