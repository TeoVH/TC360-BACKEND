/* MODULES */

const express = require('express');
const { body } = require('express-validator');
const {
  registerUser,
  loginUser
} = require('../controllers/authController.js');

/* HOME ROUTES */

const routerAuth = express.Router();
routerAuth.use(express.json());

routerAuth.get('/register', (req, res) => {
  res.send('Register');
});


routerAuth.post(
  '/register',
  [
    body('nickname', 'Insert a valid nickname').trim().notEmpty().escape(),
    body('email', 'Insert a valid email').trim().isEmail().normalizeEmail(),
  ], registerUser);

routerAuth.get('/login', (req, res) => {
  // Display login form
  res.send('Login');
});

// Receive credentials and login
routerAuth.post('/login', loginUser);

/* EXPORT */

module.exports = routerAuth;
