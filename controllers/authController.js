const { isEmail, isLength } = require('validator');
const jwt = require('jwt-simple');
const { User } = require('../models');
const { secret } = require('../config');

function tokenForUser(user) {
  const timeStamp = new Date().getTime();
  return jwt.encode(
    { sub: user._id, iat: timeStamp },
    process.env.SECRET || secret
  );
}

module.exports = {
  signUp: async (req, res) => {
    const { email, password, username } = req.body;
    if (!email || !password || !username) {
      return res
        .status(422)
        .json({ error: 'You must provide email, password,and username' });
    }
    if (!isEmail(email)) {
      return res
        .status(403)
        .json({ error: 'You must provide a valid email address' });
    }
    if (!isLength(password, { min: 6 })) {
      return res
        .status(403)
        .json({ error: 'Your password must be at least 6 characters long' });
    }
    try {
      // See if a user with the given email exists
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(403).json({ error: 'User already exists' });
      }
      const user = await new User({
        email,
        password,
        username,
      }).save();
      console.log(user, 'dadad');
      const currentUser = await User.findById(user._id).select('-password');
      // Eventually we will send a token
      return res.json({ token: tokenForUser(user), user: currentUser });
    } catch (e) {
      return res.status(403).json({ e });
    }
  },
  signIn: async (req, res) => {
    const currentUser = await User.findOne({
      email: req.user.email,
      username: req.user.usename,
    }).select('-password');
    res.json({ token: tokenForUser(req.user), user: currentUser });
  },
};
