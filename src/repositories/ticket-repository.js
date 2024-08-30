const Ticket = require('../models/ticket');

const createTicket = async (data) => {
  const ticket = new Ticket(data);
  return await ticket.save();
};

const getTicketById = async (id) => {
  return await Ticket.findById(id);
};

const getAllTickets = async () => {
  return await Ticket.find();
};

const updateTicket = async (id, data) => {
  return await Ticket.findByIdAndUpdate(id, data, { new: true });
};

const deleteTicket = async (id) => {
  return await Ticket.findByIdAndDelete(id);
};

module.exports = {
  createTicket,
  getTicketById,
  getAllTickets,
  updateTicket,
  deleteTicket,
};
