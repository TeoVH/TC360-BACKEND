/* Model*/
const Event = require('../models/Event');
const jwt = require('jsonwebtoken');
const Invite = require('../models/Invite')

/* Route */

const eventCreate = async (req, res) => {
    let {name,
        description,
        type,
        date,
        time,
        location
    } = req.body;

    let decoded = jwt.verify(req.get('Authorization'), 'keyToken');

    try {
        let event = new Event({ 
            name,
            description,
            coordinator: decoded.nickname,
            type,
            date,
            time,
            location,
            user_id: decoded._id
        });
        let createdEvent = await event.save();
        res.status(201).json({
            status : 'Sucess',
            data : {
                createdEvent
            }
        })
    } catch(err) { 
        console.log(err)        
    };
};

/* Modify an event specific */
const editEvent = async (req, res) => {
    Event.updateOne({ _id: req.params._id }, req.body)
    .then(doc => {
        if (!doc) {
            return res.status(404).end();
        }
        return res.status(200).end();
    })
}

/* Get a specific event */
const eventDetail = async (req, res) => {
    const id = req.params._id;
    try {
        let details = await Event.findOne({_id: id})
        res.json(details)
    } catch (err) {
        console.log(err)
    }
}

/* Get all events that the user create */
const showAllEvents = async (req, res) => {
    const decoded = jwt.verify(req.get('Authorization'), 'keyToken');

    try {
        let events = await Event.find({user_id : decoded._id}).all()
        res.json(events)
    } catch (err) {
        console.log(err)
    }
};

/* export */
module.exports = {
    eventCreate,
    eventDetail,
    showAllEvents,
    editEvent
};
