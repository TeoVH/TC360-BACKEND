/* MODULES */
const mongoose = require('mongoose');
const { Schema } = mongoose;

/* SCHEMA */
const userSchema = new Schema({
  nickname: {
    type: String,
    unique: true,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
});

/* EXPORTS */
const User = mongoose.model('User', userSchema);
module.exports = User;
