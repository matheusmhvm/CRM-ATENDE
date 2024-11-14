// controllers/equipmentController.js
const Equipment = require("../models/Equipment");

exports.createEquipment = async (req, res) => {
  try {
    const equipment = await Equipment.create(req.body);
    res.status(201).json(equipment);
  } catch (error) {
    res.status(500).json({ error: "Erro ao criar equipamento" });
  }
};

exports.getAllEquipments = async (req, res) => {
  try {
    const equipments = await Equipment.findAll();
    res.status(200).json(equipments);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar equipamentos" });
  }
};

exports.updateEquipment = async (req, res) => {
  try {
    const { id } = req.params;
    const equipment = await Equipment.update(req.body, { where: { id } });
    res.status(200).json({ message: "Equipamento atualizado com sucesso" });
  } catch (error) {
    res.status(500).json({ error: "Erro ao atualizar equipamento" });
  }
};

exports.inactivateEquipment = async (req, res) => {
  try {
    const { id } = req.params;
    await Equipment.update({ status: "Inativo" }, { where: { id } });
    res.status(200).json({ message: "Equipamento inativado com sucesso" });
  } catch (error) {
    res.status(500).json({ error: "Erro ao inativar equipamento" });
  }
};
