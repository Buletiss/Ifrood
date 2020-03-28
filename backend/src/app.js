const express = require('express');
const app = express();
const routes = require('./routes');

// app.use(cors())
app.use(express.json());
app.use(routes);

module.exports = app;
