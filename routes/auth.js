const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const Customer = require('../models/customer');
const router = express.Router();

router.post('/user/login', async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required' });
  }

  try {
    const user = await Customer.findOne({ email });
    if (!user) {
      const error = new Error('Invalid email or password');
      error.status = 400;
      throw error;
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      const error = new Error('Invalid email or password');
      error.status = 400;
      throw error;
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: '1h'
    });

    res.json({ token });
  } catch (error) {
    next(error);
  }
});

router.get('/user/logout', async (req, res, next) => {
    try {  
      res.status(200).json({ message: 'Logout successful' });
    } catch (error) {
      next(error);
    }
  });
  
  module.exports = router;

module.exports = router;
