'use strict';
const { Client } = require('pg');

//const connectionString = 'postgresql://postgres:root@localhost:5432/exames';
const connectionString = 'postgresql://postgres:root@localhost:5432/shop';
const client = new Client({connectionString});

module.exports = client;