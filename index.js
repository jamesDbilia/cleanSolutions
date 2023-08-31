const express = require('express');
const app = express();
const winston = require('winston');
require('./startup/routes')(app);

const port = process.env.PORT || 5000;

const server = app.listen(port, () => winston.info(`Connected to ${port}`));

module.exports = server;
