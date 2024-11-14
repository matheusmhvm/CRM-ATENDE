// routes/loanRoutes.js
const express = require("express");
const router = express.Router();
const loanController = require("../controllers/loanController"); // Verifique o caminho correto

// Rota para criar um novo empréstimo
router.post("/create", loanController.createLoan);

// Rota para listar todos os empréstimos
router.get("/", loanController.getAllLoans);

// Rota para atualizar um empréstimo pelo ID
router.put("/:id", loanController.updateLoan);

// Rota para finalizar um empréstimo
router.put("/:id/complete", loanController.completeLoan);

module.exports = router;
