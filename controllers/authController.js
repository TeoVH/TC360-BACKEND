// * Models //
const User = require('../models/User');
const jwt = require('jsonwebtoken');

/* Checking the user input to detect if it does the data already exist 
   or not and if match between both the data */
const registerUser = async (req, res) => {
  let user = await User.findOne({ email: req.body.email });
  if (user) {
    return res.status(400).send({ error: 'User already exist' });
  }

  user = await User.findOne({ nickname: req.body.nickname });
  if (user) {
    return res.status(400).send({ error: 'User already exist' });
  }

  if ((await req.body.email) !== req.body.verEmail) {
    return res.status(400).send({ error: "Emails don't match" });
  }
  
  /* Creation of the user if it doesn't exist */
  try {
    let userInfo = req.body;

    let newUser = await new User({
      nickname: userInfo.nickname,
      email: userInfo.email,
    });

    newUser.save((err) => {
      if (err) console.log(err);
      else console.log('User created');
      return res.send(JSON.stringify('User created'));
    });
  } catch (error) {
    res.json({ error: error.message });
  }
};

/* Login of the user after of the creation */
const loginUser = async (req, res) => {
  const { email } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      res.status(401);
      return res.send({ error: "User doesn't exit" });
    }

    /* Give the data to payload */
    const token = jwt.sign(
      { email: user.email, nickname: user.nickname, _id: user._id },
      'keyToken'
    );

    return res.send({
      token,
      user: { email: user.email, nickname: user.nickname, _id: user._id },
    });
  } catch (error) {
    res.json({ error: error.message });
  }
};

/* EXPORTS */
module.exports = {
  registerUser,
  loginUser,
};
