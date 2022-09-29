const mongoose = require('mongoose');
const { Schema } = mongoose;

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
  // tokenConfirm: {
  //     type: String,
  //     default: null
  // },
  // confirmedAccount: {
  //     type: Boolean,
  //     default: false
  // }
});

// userSchema.methods.compareEmail = async function(userEmail){
//     if (userEmail !== this.email) {
//         return false;
//     }

//     return true;
// }

const User = mongoose.model('User', userSchema);
module.exports = User;
