/* MODULES */

const express = require('express');
const verUser = require('../middleware/verUser');


/* HOME ROUTES */

const routerHome = express.Router();
routerHome.use(express.json())

routerHome.get('', (req, res) => {
    res.send('Hello world!')
});

routerHome.get('/user', verUser, (req, res) => {
    res.send('User Logged')
});

/* EXPORT */

module.exports = routerHome;