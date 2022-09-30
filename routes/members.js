/* MODELS */

const express = require('express');
const { memberList } = require('../controllers/membersController');

/* Midleware*/

const routerMembers = express.Router();
routerMembers.use(express.json());


/* Routes */

routerMembers.get('/', memberList);


/* Export */

module.exports = routerMembers;