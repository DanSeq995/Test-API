const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/User');

// Register a new user
const register = async (req, res, next) => {
  const { username, email, password } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ username, email, password: hashedPassword });
    await user.save();
    res.json({ message: 'Registration successful' });
  } catch (error) {
    next(error);
  }
};

// Login with an existing user
const login = async (req, res, next) => {
  const { username, password, role } = req.body;
  
  try {
    const user = await User.findOne({ username });
    const { id, role } = user
    
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    if (req.body.password != password) {
      return res.status(401).json({ message: 'Incorrect password' });
    }

    const token = jwt.sign({ userId: user._id }, process.env.SECRET_KEY, {
      expiresIn: '1 hour'
    });

    res.json({ id, role, token });
  } catch (error) {
    next(error);
  }
};

module.exports = { register, login };