/* MODELS */

const express = require('express');
const { memberList } = require('../controllers/membersController');
const verUser = require('../middleware/verUser');

/* Midleware*/

const routerMembers = express.Router();
routerMembers.use(express.json());

/* Routes */

routerMembers.get('/', memberList);
<<<<<<< HEAD
=======

>>>>>>> 7a5e313ce8691a477f9321b081d1e0ddb94964b3

/* Export */

module.exports = routerMembers;
