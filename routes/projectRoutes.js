const express = require('express');
const knex = require('knex');
const knexConfig = require('../knexfile');
const db = knex(knexConfig);

const router = express();


module.exports = router;