/* Modules */

const express = require('express');
const { eventCreate, eventDetail, showAllEvents } = require('../controllers/eventController');

/* Midleware */

const routerEvent = express.Router();
routerEvent.use(express.json());

/* Route */
routerEvent.post('/event', eventCreate);

routerEvent.get('/event/:_id', eventDetail);

routerEvent.get('/event', showAllEvents);

/* Export */
module.exports = routerEvent;


