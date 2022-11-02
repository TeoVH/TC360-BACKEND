/* Schema general to events, only the name of event don't repeat */

const mongoose = require('mongoose')
const { Schema } = mongoose

const eventSchema = new Schema({
    name: {
        type : String,
        required : true,
        unique: true,
    },
    description: {
        type : String,
        required : true,
    },
    coordinator: {
        type : String,
        required : true,
    },
    type: {
        type : String,
        required : true,
    },
    date: {
        type : String,
        required : true,
    },
    time: {
        type : String,
        required : true,
    },
    location: {
        type : String,
        required : true,
    },
    guests: {
        type: Array
    },
    user_id: {
        type : String,
        required : true,
    }
});

/* EXPORTS */
const Event = mongoose.model('Event', eventSchema);
module.exports = Event;
