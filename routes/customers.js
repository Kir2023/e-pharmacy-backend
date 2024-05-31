const express = require('express');
const router = express.Router();
const Customer = require('../models/customer');

// Маршрут для получения всех пользователей
router.get('/', async (req, res, next) => {
  try {
    const customers = await Customer.find();
    res.json(customers);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
