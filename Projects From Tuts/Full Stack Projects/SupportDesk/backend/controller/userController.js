const asyncHandler = require('express-async-handler');
const bcrypt = require('bcryptjs');

const User = require('../models/userModel');
// @desc Register a new user
// @route /api/users
// @access Public

const registerUser = asyncHandler(async (req, res) => {
  const { email, name, password } = req.body;

  if (!email || !name || !password) {
    res.status(400);
    throw new Error('Include all fields');
  }

  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400);
    throw new Error('User Already Exists');
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPass = await bcrypt.hash(password, salt);

  const user = await User.create({
    name,
    email,
    password: hashedPass,
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
    });
  } else {
    res.status(400);
    throw new Error('Invalid User Data');
  }
});
const loginUser = (req, res) => {
  res.send('Login User');
};

module.exports = {
  registerUser,
  loginUser,
};
