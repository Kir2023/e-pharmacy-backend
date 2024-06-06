const express = require("express");
const router = express.Router();
const Order = require("../models/order");

router.get("/", async (req, res, next) => {
  try {
    const { sortBy, filterBy, filterValue } = req.query;

    let query = {};
    if (filterBy && filterValue) {
      query[filterBy] = filterValue;
    }

    let sort = {};
    if (sortBy) {
      const [field, order] = sortBy.split(":");
      sort[field] = order === "desc" ? -1 : 1;
    }

    const orders = await Order.find(query).sort(sort).exec();
    res.json(orders);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
