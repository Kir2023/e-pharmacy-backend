const express = require('express');
const router = express.Router();
const Customer = require('../models/customer');
const Product = require('../models/product');
const Supplier = require('../models/supplier');
const Transaction = require('../models/transaction');

router.get('/', async (req, res, next) => {
  try {
    const totalProducts = await Product.countDocuments({});
    const totalSuppliers = await Supplier.countDocuments({});
    const totalCustomers = await Customer.countDocuments({});

    const recentCustomers = await Customer.find()
      .sort({ createdAt: -1 })
      .limit(5)
      .select('name email country spent');

    const recentTransactions = await Transaction.find()
      .sort({ createdAt: -1 })
      .limit(6)
      .select('name amount type');

    res.json({
      totalProducts,
      totalSuppliers,
      totalCustomers,
      recentCustomers,
      recentTransactions,
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;