/* Modules */

const mongoose = require('mongoose')
const { Schema } = mongoose

/* SCHEMA */
const inviteSchema = new Schema ({
    user_id : {
        type : String,
        required : true,
    },
    event_id : {
        type : String,
        required : true,
    },
    confirmation : {
        type : String,
        required : true,
    },
})

/* Exports */
const Invite = mongoose.model('Invite', inviteSchema)
module.exports = Invite