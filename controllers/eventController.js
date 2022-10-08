/* Model*/
const Event = require('../models/Event');
const jwt = require('jsonwebtoken');

/* Route */

const eventCreate = async (req, res) => {
    let {name,
        description,
        // coordinator,
        type,
        date,
        time,
        location
    } = req.body;

    let decoded = jwt.verify(req.headers.authorization, 'keyToken');

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

/* export*/
module.exports = {
    eventCreate
}