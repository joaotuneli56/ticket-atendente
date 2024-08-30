const express = require('express');
const router = express.Router();
const ticketController = require('../controllers/ticket-controller');

router.post('/tickets', ticketController.createTicket);
router.get('/tickets', ticketController.getAllTickets);
router.get('/tickets/:id', ticketController.getTicketById);
router.put('/tickets/:id', ticketController.updateTicket);
router.delete('/tickets/:id', ticketController.deleteTicket);

module.exports = router;
