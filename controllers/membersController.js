/* Module */

const User = require('../models/User');

/* Alphabetical sort */
const memberList = async (req, res) => {
  try {
    let alph = req.body.nickname;
    let list = await User.find({}, { nickname: 1, email: 1 }).sort({
      nickname: 1,
    });
    const userMap = {};
    list.forEach((user) => {
      userMap[user.nickname] = user;
    });
    res.send(list);
  } catch (err) {
    console.log(err);
  }
};

/* Exports */

module.exports = {
  memberList,
};
