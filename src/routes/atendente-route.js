const express = require('express');
const router = express.Router();
const attendantController = require('../controllers/atendente-controller.js');

router.post('/Atendente', attendantController.createAttendant);
router.get('/Atendente', attendantController.getAllAttendants);
router.get('/Atendente/:id', attendantController.getAttendantById);
router.put('/Atendente/:id', attendantController.updateAttendant);
router.delete('/Atendente/:id', attendantController.deleteAttendant);

module.exports = router;
