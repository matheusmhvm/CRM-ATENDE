// controllers/loanController.js
const Loan = require("../models/Loan");
const Equipment = require("../models/Equipment");

exports.createLoan = async (req, res) => {
  try {
    const loan = await Loan.create(req.body);
    res.status(201).json(loan);
  } catch (error) {
    res.status(500).json({ error: "Erro ao registrar empréstimo" });
  }
};

exports.getAllLoans = async (req, res) => {
  try {
    const loans = await Loan.findAll({
      include: Equipment, // Incluir dados do equipamento
    });
    res.status(200).json(loans);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar empréstimos" });
  }
};

exports.updateLoan = async (req, res) => {
  try {
    const { id } = req.params;
    await Loan.update(req.body, { where: { id } });
    res.status(200).json({ message: "Empréstimo atualizado com sucesso" });
  } catch (error) {
    res.status(500).json({ error: "Erro ao atualizar empréstimo" });
  }
};

exports.completeLoan = async (req, res) => {
  try {
    const { id } = req.params;
    await Loan.update({ status: "Concluído" }, { where: { id } });
    res.status(200).json({ message: "Empréstimo concluído" });
  } catch (error) {
    res.status(500).json({ error: "Erro ao concluir empréstimo" });
  }
};
