/* MODULES */

const express = require('express');
const verToken = require('../middleware/verToken');

/* HOME ROUTES */

const routerHome = express.Router();
routerHome.use(express.json());

routerHome.get('', (req, res) => {
  res.send('Hello world!');
});

routerHome.get('/user', verToken, (req, res) => {
  res.send('User Logged');
});

/* EXPORT */

module.exports = routerHome;
