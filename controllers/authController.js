// * Models //
const User = require('../models/User');
const jwt = require('jsonwebtoken');

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

const loginUser = async (req, res) => {
  const { email } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      console.log("User doesn't exit");
      res.status(401);
      return res.send({ error: "User doesn't exit" });
    }

    console.log(user);
    const token = jwt.sign(
      { email: user.email, nickname: user.nickname },
      'keyToken'
    );

    // if (!await user.compareEmail(email)) {
    //   console.log("Incorrect email");
    //   return res.send({error: "Incorrect email"});
    // };

    return res.send({
      token,
      user: { email: user.email, nickname: user.nickname, _id: user._id },
    });
  } catch (error) {
    res.json({ error: error.message });
  }
};

module.exports = {
  registerUser,
  loginUser,
};
