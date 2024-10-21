const express = require('express');
const router = express.Router();
const clienteController = require('../controller/clienteController'); // Importa o controller de clientes

// Rota para listar todos os clientes
router.get('/clientes', clienteController.listarClientes); 
// get: puxa 
// O .get utiliza diretamente no navegador
// Ex: localhost:3333/cliente

// Rota para buscar um cliente por CPF
router.get('/clientes/:cpf', clienteController.listarClienteCpf); 

// Rota para adicionar um novo cliente
router.post('/clientes', clienteController.adicionarCliente ); // post: adicionar

// Rota para atualizar um cliente por CPF
router.put('/clientes/:cpf', clienteController.atualizarCliente); // put: atualiza por completo. E o pat: atualiza parcialmente

// Rota para deletar um cliente por CPF
router.delete('/clientes/:cpf', clienteController.deletarCliente);
//post, put, delete utiliza apenas para configuração, quem utiliza é o servidor.

module.exports = router