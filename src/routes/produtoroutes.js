const express = require('express');
const router = express.Router();
const produtoController = require('../controller/produtoController'); // Importa o controller de produtos


// Rota para listar todos os produtos
router.get('/produtos', produtoController.listarProdutos);

// Rota para buscar o produto pelo codigo
router.get('/produtos/:codigoProduto', produtoController.buscarProdutocodigoProduto);

// Rota para buscar produtos por nome (prefixo)
router.get('/produtos/nome/:nomeProduto', produtoController.buscarProdutoNome);

// Rota para adicionar um novo produto
router.post('/produtos', produtoController.adicionarProduto);

// Rota para atualizar um produto por codigo
router.put('/produtos/:codigo', produtoController.adicionarProduto);

// Rota para deletar um produto por codigo
router.delete('/produtos/:codigo', produtoController.deletarProduto);

module.exports = router;