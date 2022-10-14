/* Models 
 * import express module
 * import all controller functions from inviteController file
 **/

const express = require('express');
const { myInvites, inviteCreate } = require('../controllers/inviteController');

/* Midleware */

const routeInvite = express.Router();
routeInvite.use(express.json());

/* Route */

/* get all events that the user was invited */
routeInvite.get('/my-invites', myInvites);

routeInvite.get('/invite', );

/* create a new invitation */
routeInvite.post('/create-invite', inviteCreate);

/* Exports */

module.exports = routeInvite;