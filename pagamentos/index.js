const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'UP', service: 'pagamentos' });
});

app.post('/api/pagamentos', (req, res) => {
  const { pedidoId, valor } = req.body;
  console.log(`Processando pagamento do pedido ${pedidoId} no valor de ${valor}`);
  
  res.status(200).json({ 
    message: 'Pagamento aprovado', 
    pedidoId: pedidoId,
    status: 'APROVADO'
  });
});

app.listen(port, () => {
  console.log(`Serviço de Pagamentos rodando na porta ${port}`);
});
