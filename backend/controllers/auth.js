const bcrypt = require('bcryptjs');
const { createUser, findByEmail } = require('../models/userModel');
const { generateToken } = require('../utils/token');
require('dotenv').config();

exports.signup = async (req, res, next) => {
  const { username, email, password } = req.body;
  const role = email.endsWith(process.env.DOMAIN_NAME) ? 'admin' : 'user';

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    await createUser(username, email, hashedPassword, role);
    res.status(201).send('User registered');
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: 'Signup failed', error: err.message });
    next(err); // Optional: if you want centralized error handling
  }
};

exports.login = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const user = await findByEmail(email);
    if (!user) {
      return res.status(401).json({ message: 'Invalid email or user not found' });
    }

    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) {
      return res.status(401).json({ message: 'Invalid password' });
    }

    const token = generateToken(user.email, user.role);
    res.status(200).json({ token });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: 'Login failed', error: err.message });
    next(err); // Optional
  }
};
