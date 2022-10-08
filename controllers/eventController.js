/* Model*/
const Event = require('../models/Event')

/* Route */

const eventCreate = async (req, res) => {
    let {name,
        description,
        coordinator,
        type,
        date,
        time,
        location
    } = req.body

    try {
        let event = new Event({ 
            name,
            description,
            coordinator,
            type,
            date,
            time,
            location 
        })
        let newEvent = await event.save()
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