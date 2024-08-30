const ticketRepository = require('../repositories/ticket-repository.js');

const createTicket = async (req, res) => {
  try {
    const { personId, title, phone } = req.body;
    if (!personId || !title || !phone) {
      return res.status(400).json({ message: 'Campos obrigatórios não preenchidos.' });
    }

    const ticket = await ticketRepository.createTicket({ personId, title, phone });
    res.status(201).json(ticket);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao criar ticket.', error: error.message });
  }
};

const getTicketById = async (req, res) => {
  try {
    const ticket = await ticketRepository.getTicketById(req.params.id);
    if (!ticket) {
      return res.status(404).json({ message: 'Ticket não encontrado.' });
    }
    res.status(200).json(ticket);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar ticket.', error: error.message });
  }
};

const getAllTickets = async (req, res) => {
  try {
    const tickets = await ticketRepository.getAllTickets();
    res.status(200).json(tickets);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar tickets.', error: error.message });
  }
};

const updateTicket = async (req, res) => {
  try {
    const ticket = await ticketRepository.updateTicket(req.params.id, req.body);
    if (!ticket) {
      return res.status(404).json({ message: 'Ticket não encontrado.' });
    }
    res.status(200).json(ticket);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao atualizar ticket.', error: error.message });
  }
};

const deleteTicket = async (req, res) => {
  try {
    const ticket = await ticketRepository.deleteTicket(req.params.id);
    if (!ticket) {
      return res.status(404).json({ message: 'Ticket não encontrado.' });
    }
    res.status(200).json({ message: 'Ticket deletado com sucesso.' });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao deletar ticket.', error: error.message });
  }
};

module.exports = {
  createTicket,
  getTicketById,
  getAllTickets,
  updateTicket,
  deleteTicket,
};
