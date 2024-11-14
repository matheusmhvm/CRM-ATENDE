// controllers/unitController.js
const Unit = require("../models/Unit");

exports.createUnit = async (req, res) => {
  try {
    const unit = await Unit.create(req.body);
    res.status(201).json(unit);
  } catch (error) {
    res.status(500).json({ error: "Erro ao criar unidade" });
  }
};

exports.getAllUnits = async (req, res) => {
  try {
    const units = await Unit.findAll();
    res.status(200).json(units);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar unidades" });
  }
};

exports.updateUnit = async (req, res) => {
  try {
    const { id } = req.params;
    await Unit.update(req.body, { where: { id } });
    res.status(200).json({ message: "Unidade atualizada com sucesso" });
  } catch (error) {
    res.status(500).json({ error: "Erro ao atualizar unidade" });
  }
};

exports.inactivateUnit = async (req, res) => {
  try {
    const { id } = req.params;
    await Unit.update({ status: false }, { where: { id } });
    res.status(200).json({ message: "Unidade inativada com sucesso" });
  } catch (error) {
    res.status(500).json({ error: "Erro ao inativar unidade" });
  }
};
