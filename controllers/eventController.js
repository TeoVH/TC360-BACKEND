/* Model*/
const Event = require('../models/Event');
const jwt = require('jsonwebtoken');

/* Route */

const eventCreate = async (req, res) => {
    let {name,
        description,
        type,
        date,
        time,
        location
    } = req.body;

    let decoded = jwt.verify(req.headers.Authorization, 'keyToken');

    try {
        let event = new Event({ 
            name,
            description,
            coordinator: decoded.nickname,
            type,
            date,
            time,
            location 
        })
        let createdEvent = await event.save()
        res.status(201).json({
            status : 'Sucess',
            data : {
                createdEvent
            }
        })
    } catch(err) { 
        console.log(err)        
    }
}

const eventDetail = async (req, res) => {
    const id = req.params._id;
    try {
        let details = await Event.findOne({_id: id})
        res.json(details)
    } catch (err) {
        console.log(err)
    }
}

const showAllEvents = async (req, res) => {
    try {
        let events = await Event.find({}).all()
        res.json(events)
    } catch (err) {
        console.log(err)
    }
}

/* export*/
module.exports = {
    eventCreate,
    eventDetail,
    showAllEvents
}
