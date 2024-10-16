const db = require('../db/db'); // Módulo de conexão com o banco de dados
const Joi = require('joi'); // Biblioteca de validação de dados
const bcrypt = require('bcrypt'); // Para encriptação de senhas

// Validação com Joi
const clienteSchema = Joi.object({
    cpf: Joi.string().length(11).required(), // CPF deve ser uma string de exatamente 11 caracteres
    nome: Joi.string().required().max(50), // Nome deve ser uma string, é obrigatório e deve ter no máximo 50 caracteres
    endereco: Joi.string().required(), // Endereço deve ser uma string e é obrigatório
    bairro: Joi.string().required(), // Bairro deve ser uma string e é obrigatório
    cidade: Joi.string().allow(), // Cidade é uma string e não é obrigatório
    telefone: Joi.string().required(), // Telefone deve ser uma string é obrigatória
    senha: Joi.string().min(6).required() // Senha deve ter no mínimo 6 caracteres e é obrigatória
});

// Listar todos os clientes
exports.listarClientes = async (req, res) => {
    try {
        const [result] = await db.query('SELECT * FROM cliente');
        res.json(result); // Aqui retornamos apenas os dados da consulta
    } catch (err) {
        console.error('Erro ao buscar clientes:', err);
        res.status(500).json({ error: 'Erro interno do servidor' });
    }
};

// Buscar um cliente por CPF
exports.listarClienteCpf = async (req, res) => {
    const { cpf } = req.params;
    try {
        const [result] = await db.query('SELECT * FROM cliente WHERE cpf = ?', [cpf]);
        if (result.length === 0) {
            return res.status(404).json({ error: 'Cliente não encontrado' });
        }
        res.json(result[0]);
    } catch (err) {
        console.error('Erro ao buscar cliente:', err);
        res.status(500).json({ error: 'Erro interno do servidor' });
    }
};

// Deletar um cliente
exports.deletarCliente = async (req, res) => {
    const { cpf } = req.params;
    try {
        await db.query('DELETE FROM cliente WHERE cpf = ?', [cpf]);
        res.json({ message: 'Cliente deletado com sucesso' });
    } catch (err) {
        console.error('Erro ao deletar cliente:', err);
        res.status(500).json({ error: 'Erro ao deletar cliente'});
    }
};