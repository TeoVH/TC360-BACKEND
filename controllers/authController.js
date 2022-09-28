// * Models //
const User = require("../models/User");

const registerUser = async (req, res) => {
  let user = await User.findOne({email: req.body.email});
  if (user) {
    console.log('User already exit');
    return res.json({error: "User already exist"});
  }

  user = await User.findOne({nickname: req.body.nickname});
  if (user) {
    console.log('User already exit');
    return res.json({error: "User already exist"});
  }

  if (await req.body.email !== req.body.verEmail) {
    console.log("Emails don't match");
    return res.json({error: "Emails don't match"});
  }

  try {
    let userInfo = req.body;

    let newUser = await new User({
      nickname: userInfo.nickname,
      email: userInfo.email,
      verEmail: userInfo.email,
    });

    newUser.save((err) => {
      if (err)
        console.log(err);

      else
        console.log('User created');
        return res.send(JSON.stringify('User created'));
    });
  } catch (error) {
    res.json({ error: error.message });
  }
};

const loginUser = async(req, res) => {
  const { email } = req.body;
  try {
    const user = await User.findOne({email})
    if (!user) {
      console.log("User doesn't exit");
      return res.send({error: "User doesn't exit"});
    }

    // if (!await user.compareEmail(email)) {
    //   console.log("Incorrect email");
    //   return res.send({error: "Incorrect email"});
    // };

    return res.send(JSON.stringify('successful login'));
  } catch (error) {
    res.json({ error: error.message });
  }
};

module.exports = {
    registerUser,
    loginUser
}