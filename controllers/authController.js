// * Models //
const { validationResult } = require('express-validator');
const User = require('../models/User');

const registerUser = async (req, res) => {
  const { nickname, email, verEmail } = req.body;
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.json(errors);
  }

  try {
    let user = await User.findOne({ nickname: nickname });
    if (user) {
      return res.status(400).send({ error: 'User already exist' });
    }
    
    user = await User.findOne({ email: email });
    if (user) {
      return res.status(400).send({ error: 'User already exist' });
    }

    if ((await email) !== verEmail) {
      return res.status(400).send({ error: "Emails don't match" });
    }

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
      return res.send({ error: "User doesn't exit" });
    }

    // if (!await user.compareEmail(email)) {
    //   console.log("Incorrect email");
    //   return res.send({error: "Incorrect email"});
    // };

    // Crear sesion a travez de passport
    req.login(user, (error) => {
      if (error) throw new Error('Error to create session');
      return res.send(JSON.stringify('successful login'));
    });
  } catch (error) {
    res.json({ error: error.message });
  }
};

module.exports = {
  registerUser,
  loginUser,
};
