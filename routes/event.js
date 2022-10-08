/* Modules */

const express = require('express')
const { eventCreate, eventDetail } = require('../controllers/eventController')

/* Midleware */

const routerEvent = express.Router()
routerEvent.use(express.json())

/* Route */
routerEvent.post('/event', eventCreate)
routerEvent.get('/event/:_id', eventDetail)

/* Export */
module.exports = routerEvent


