/* Models 
 * import express module
 * import all controller functions from inviteController file
 **/

const express = require('express');
const { myInvites, createInvite } = require('../controllers/inviteController');

/* Midleware */

const routeInvite = express.Router();
routeInvite.use(express.json());

/* Route */

/* get all events that the user was invited */
routeInvite.get('/invite', myInvites);

/* create a new invitation */
routeInvite.post('/create-invite', createInvite);

/* Exports */

module.exports = routeInvite;