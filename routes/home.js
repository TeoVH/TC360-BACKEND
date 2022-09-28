/* MODULES */

const express = require('express');


/* HOME ROUTES */

const routerHome = express.Router();
routerHome.use(express.json())

routerHome.get('', (req, res) => {
    res.send('Hello world!')
});

/* EXPORT */

module.exports = routerHome;