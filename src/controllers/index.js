'use strict';

const client = require('../../db/index');

client.connect();

exports.getTotalSallerMonth = (req, res, next) => {

    client.query('select extract(MONTH from data) as mes,  sum(produto.preco), nome ' +
        'from venda, vendedor, produto ' +
        'where id_vendedor = vendedor.id and id_produto = produto.id '+
        'group by id_vendedor, data, nome '+
        'order by mes', (err, result) => {
            if(err){
                console.log(err.stack);
                res.status(400).send({'erro':err});
            }else{
                res.header("Access-Control-Allow-Origin", "*");
                res.status(200).send(
                    result.rows
                );
            }
        });
};

exports.getClientByProduct = (req, res, next) => {
    client.query('select c.nome, count ( c.nome) as produtos '+
        'from cliente c, produto p, venda v '+
        'where p.id = $1 and v.id_produto = p.id and v.cliente_id = c.id '+
        'group by c.nome order by produtos desc',
        [req.params.id], (err, result) => {
        if(err){
            console.log(err.stack);
            res.status(400).send({'erro':err});
        }else{
            res.header("Access-Control-Allow-Origin", "*");
            res.status(200).send(
                result.rows
            );
        }
    });
};

exports.getTotalMonthSeller = (req, res, next) => {
    client.query('select extract(MONTH from data) as mes, sum(produto.preco) as total '+
    'from venda, produto '+
    'where id_produto = produto.id ' +
    'group by data ' +
    'order by mes', (err, result) => {
        if(err){
            console.log(err.stack);
            res.status(400).send({'erro':err});
        }else{
            res.header("Access-Control-Allow-Origin", "*");
            res.status(200).send(
                result.rows
            );
        }
    });
};

exports.newClient = (req, res, next) => {
    client.query('INSERT INTO cliente(nome) VALUES($1)',[req.body.nome], (err, result) => {
        if(err){
            res.status(400).send({
                message: err.stack
            });
        }else{
            res.status(200).send({
                message: req.body.nome+' cadastrado!'
            });
        }
    });
};