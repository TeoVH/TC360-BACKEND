/* Modules 
 * import express module
 * import all controller functions from eventController file
 **/

const express = require('express');
const { eventCreate, eventDetail, showAllEvents, editEvent } = require('../controllers/eventController');

/* Midleware */

const routerEvent = express.Router();
routerEvent.use(express.json());

/* Route */

/* send new event using post method */
routerEvent.post('/event', eventCreate);

/* modify event using the id and put method */
routerEvent.put('/event/:_id', editEvent);

/* get a specific event using the id and get method */
routerEvent.get('/event/:_id', eventDetail);

/* get all events that the user create, using get method */
routerEvent.get('/event', showAllEvents);

/* Export */
module.exports = routerEvent;


