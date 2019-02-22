const express = require('express');
const helmet = require('helmet');
const logger = require('morgan');
const server = express();
const projectsRoutes = require('./routes/projectRoutes');


server.use(helmet());
server.use(logger());
server.use('/api/projects', projectsRoutes);

module.exports = server;