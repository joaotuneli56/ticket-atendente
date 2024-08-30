const express = require('express');
const mongose = require('mongose');
const app = express();

// Configurações de Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Conectar ao MongoDB
mongose.connect('mongodb://localhost:27017/mydatabase', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Conectado ao MongoDB'))
.catch((error) => console.error('Erro ao conectar ao MongoDB:', error));

// Registrar os models
require('./models/atendente');
require('./models/ticket');

// Importar rotas
const atendenteRoutes = require('./routes/atendente-route');
const ticketRoutes = require('./routes/tickets-route');

// Usar as rotas
app.use('/api/atendente', atendenteRoutes);
app.use('/api/tickets', ticketRoutes);

// Definir a porta
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

module.exports = app;
