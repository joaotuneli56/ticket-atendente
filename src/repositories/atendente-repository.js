const Atendente = require('../models/atendente');

const createAtendente = async (data) => {
  const Atendente = new Atendente(data);
  return await Atendente.save();
};

const getAtendenteById = async (id) => {
  return await Atendente.findById(id);
};

const getAllAtendentes = async () => {
  return await Atendente.find();
};

const updateAtendente = async (id, data) => {
  return await Atendente.findByIdAndUpdate(id, data, { new: true });
};

const deleteAtendente = async (id) => {
  return await Atendente.findByIdAndDelete(id);
};

module.exports = {
  createAtendente,
  getAtendenteById,
  getAllAtendentes,
  updateAtendente,
  deleteAtendente,
};
