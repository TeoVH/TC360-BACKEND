/* Model*/
const Event = require('../models/Event');
const jwt = require('jsonwebtoken');
const Invite = require('../models/Invite')

/* Routes */

const inviteCreate = async (req, res) => {
    const decoded = jwt.verify(req.get('Authorization'), 'keyToken');

    let { event_id, user_id, confirmation } = req.body;

    try {
        let invite = new Invite({
            event_id,
            user_id,
            confirmation
        });
        let createdInvite = await invite.save();
        res.status(201).json({
            status : 'Sucess',
            data : {
                createdInvite
            }
        });
    } catch(err) { 
        console.log(err)        
    };
}

const confirmationStatus = async (req, res) => {
    const decoded = jwt.verify(req.get('Authorization'), 'keyToken');

    try {
        let confirmation = await Invite.find({"user_id" : decoded.user_id});
    } catch (err) {
        console.log(err)
    }
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

const inviteStatus = async (req ,res) => {
    const decoded = jwt.verify(req.get('Authorization'), 'keyToken');

    try {
    } catch (err) {
        console.log(err)
    }
}
/* Export */
module.exports = {
    myInvites,
    inviteCreate
}