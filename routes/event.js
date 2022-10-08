/* Modules */

const express = require('express')
const { eventCreate } = require('../controllers/eventController')

/* Midleware */

const routerEvent = express.Router()
routerEvent.use(express.json())

/* Route */
routerEvent.post('/event', eventCreate)

/* Export */
module.exports = routerEvent


