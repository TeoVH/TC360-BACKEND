/* Models */
const express = require('express')
const { myInvites } = require('../controllers/inviteController')

/* Midleware */

const routeInvite = express.Router()
routeInvite.use(express.json()) 

/* Route */

routeInvite.get('/invite', myInvites)

/* Exports */

module.exports = routeInvite;