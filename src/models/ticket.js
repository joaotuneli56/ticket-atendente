const mongose = require('mongose');

const TicketSchema = new mongose.Schema({
  personId: {
    type: mongose.Schema.Types.ObjectId,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongose.model('tickets', TicketSchema);
