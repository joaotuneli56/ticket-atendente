const mongose = require('mongose');

const AtendenteSchema  = new mongose.Schema({
  personId: {
    type: mongose.Schema.Types.ObjectId,
    required: true,
  },
  departmentId: {
    type: mongose.Schema.Types.ObjectId,
    required: true,
  },
  sectorId: {
    type: mongose.Schema.Types.ObjectId,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongose.model('Atendente', AtendenteSchema);
