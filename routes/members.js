/* MODELS */

const express = require('express');
const { memberList } = require('../controllers/membersController');
const verUser = require('../middleware/verUser');

/* Midleware*/

const routerMembers = express.Router();
routerMembers.use(express.json());

/* Routes */

routerMembers.get('/', memberList);

/* Export */

module.exports = routerMembers;
