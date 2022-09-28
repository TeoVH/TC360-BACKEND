/* MODULES */

const express = require('express');
const { registerUser, loginUser } = require('../controllers/authController.js')

/* HOME ROUTES */

const routerAuth = express.Router();
routerAuth.use(express.json())

routerAuth.get('/register', (req, res) => {
    res.send('Register')
});

routerAuth.post('/register', registerUser);

routerAuth.get('/login', (req, res) => {
    res.send('Login')
});

routerAuth.post('/login', loginUser);

/* EXPORT */

module.exports = routerAuth;