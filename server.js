const express = require('express');
const helmet = require('helmet');
const logger = require('morgan');
const server = express();
const projectsRoutes = require('./routes/projectRoutes');
const actionRoutes = require('./routes/actionRoutes');

server.use(express.json())
server.use(helmet());
server.use(logger());
server.use('/api/projects', projectsRoutes);
server.use('/api/projects', actionRoutes);

module.exports = server;