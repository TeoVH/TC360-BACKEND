/* Model*/
const Event = require('../models/Event');
const jwt = require('jsonwebtoken');
const Invite = require('../models/Invite')

/* Routes */

const inviteEvent = async (req, res) => {
    const decoded = jwt.verify(req.get('Authorization'), 'keyToken');

    let { event_id, confirmation } = req.body;

    try {
        let invite = new Invite({
            event_id,
            user_id : decoded.user_id,
            confirmation
        });
        let datesInvite = await invite.save();
        res.status(201).json({
            status : 'Sucess',
            data : {
                datesInvite
            }
        });
    } catch(err) { 
        console.log(err)        
    };
}

const myInvites = async (req, res) => {
    const decoded = jwt.verify(req.get('Authorization'), 'keyToken');

    try {
        let events = await Event.find({"guests._id" : decoded._id}).all()
        res.json(events)
    } catch (err) {
        console.log(err)
    }
}

/* Export */
module.exports = {
    myInvites,
    inviteEvent
}