const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const Customer = require('../models/customer');
const router = express.Router();

router.post('/login', async (req, res, next) => {
    console.log('Login request received:', req.body);
    const { email, password } = req.body;
  
    if (!email || !password) {
      return res.status(400).json({ message: 'Email and password are required' });
    }
  
    try {
      const user = await Customer.findOne({ email });
      if (!user) {
        console.log('User not found:', email);
        return res.status(400).json({ message: 'Invalid email or password' });
      }
  
      if (password !== user.password) {
        console.log('Password does not match for user:', email);
        return res.status(400).json({ message: 'Invalid email or password' });
      }
  
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
        expiresIn: '1h'
      });
  
      console.log('Login successful, token generated');
      res.json({ token });
    } catch (error) {
      console.error('Login error:', error);
      next(error);
    }
});

router.get('/logout', async (req, res, next) => {
    try {  
      res.status(200).json({ message: 'Logout successful' });
    } catch (error) {
      next(error);
    }
});
  
module.exports = router;