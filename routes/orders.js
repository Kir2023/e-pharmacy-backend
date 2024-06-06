const express = require("express");
const router = express.Router();
const Order = require("../models/order");

router.get("/", async (req, res, next) => {
  try {
    const orders = await Order.find().exec();
    res.json(orders);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
