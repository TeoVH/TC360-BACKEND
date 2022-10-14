/* Models 
 * import express module
 * import all controller functions from inviteController file
 **/

const express = require('express');
const { myInvites, inviteEvent } = require('../controllers/inviteController');

/* Midleware */

const routeInvite = express.Router();
routeInvite.use(express.json());

/* Route */

/* get all events that the user was invited */
routeInvite.get('/my-invites', myInvites);

routeInvite.get('/invite', );

/* create a new invitation */
routeInvite.post('/confirmation-invite', inviteEvent);

/* Exports */

module.exports = routeInvite;