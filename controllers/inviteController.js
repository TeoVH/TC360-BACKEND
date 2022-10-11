/* Model*/
const Event = require('../models/Event');
const jwt = require('jsonwebtoken');
const Invite = require('../models/Invite')

/* Routes */

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
    myInvites
}