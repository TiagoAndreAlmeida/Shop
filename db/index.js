'use strict';
const { Client } = require('pg');

const connectionString = 'postgres://cyyycvzxvbtuij:3a59b6785bbf40c9a5bc8752c8ec2ef8f47adb565e4481e3c0005ad2c8622189@ec2-54-227-241-179.compute-1.amazonaws.com:5432/df9d1k06lkphtv';
const client = new Client({connectionString});

module.exports = client;