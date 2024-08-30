const attendantRepository = require('../repositories/atendente-repository');

const createAttendant = async (req, res) => {
  try {
    const { personId, departmentId, sectorId } = req.body;
    if (!personId || !departmentId || !sectorId) {
      return res.status(400).json({ message: 'Campos obrigatórios não preenchidos.' });
    }

    const attendant = await attendantRepository.createAttendant({ personId, departmentId, sectorId });
    res.status(201).json(attendant);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao criar atendente.', error: error.message });
  }
};

const getAttendantById = async (req, res) => {
  try {
    const attendant = await attendantRepository.getAttendantById(req.params.id);
    if (!attendant) {
      return res.status(404).json({ message: 'Atendente não encontrado.' });
    }
    res.status(200).json(attendant);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar atendente.', error: error.message });
  }
};

const getAllAttendants = async (req, res) => {
  try {
    const attendants = await attendantRepository.getAllAttendants();
    res.status(200).json(attendants);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar atendentes.', error: error.message });
  }
};

const updateAttendant = async (req, res) => {
  try {
    const attendant = await attendantRepository.updateAttendant(req.params.id, req.body);
    if (!attendant) {
      return res.status(404).json({ message: 'Atendente não encontrado.' });
    }
    res.status(200).json(attendant);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao atualizar atendente.', error: error.message });
  }
};

const deleteAttendant = async (req, res) => {
  try {
    const attendant = await attendantRepository.deleteAttendant(req.params.id);
    if (!attendant) {
      return res.status(404).json({ message: 'Atendente não encontrado.' });
    }
    res.status(200).json({ message: 'Atendente deletado com sucesso.' });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao deletar atendente.', error: error.message });
  }
};

module.exports = {
  createAttendant,
  getAttendantById,
  getAllAttendants,
  updateAttendant,
  deleteAttendant,
};
