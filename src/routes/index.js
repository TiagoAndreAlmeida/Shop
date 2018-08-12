'use strict';

const express = require('express');
const router = express.Router();

const controller = require('../controllers/index');

//retorna o total de vendas de cada vendedor por mês
router.get('/totalvendedormes', controller.getTotalSallerMonth);

//retorna os clientes que mais compraram por produto
router.get('/maiscompradoporproduto/:id', controller.getClientByProduct);

//retorna o total de vendas no mês
router.get('/totalvendames',controller.getTotalMonthSeller);

//cadastra um novo cliente
router.post('/cadastrarcliente', controller.newClient);

module.exports = router;