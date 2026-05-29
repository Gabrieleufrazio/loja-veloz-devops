const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// Rota de Healthcheck (importante para o Kubernetes liveness/readiness probes)
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'UP', service: 'pedidos' });
});

app.post('/api/pedidos', (req, res) => {
  const pedido = req.body;
  // Mock da criação de pedido
  console.log('Criando pedido:', pedido);
  
  // Aqui iria a lógica de publicar evento no RabbitMQ (PedidoCriado)
  
  res.status(201).json({ 
    message: 'Pedido criado com sucesso', 
    pedidoId: Math.floor(Math.random() * 10000) 
  });
});

app.listen(port, () => {
  console.log(`Serviço de Pedidos rodando na porta ${port}`);
});
