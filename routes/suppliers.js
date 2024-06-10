const express = require("express");
const router = express.Router();
const Supplier = require("../models/supplier");

router.get("/", async (req, res, next) => {
  try {
    const suppliers = await Supplier.find();
    res.json(suppliers);
  } catch (err) {
    next(err);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const { name, address, suppliers, date, amount, status } = req.body;
    const newSupplier = new Supplier({
      name,
      address,
      suppliers,
      date,
      amount,
      status,
    });
    const savedSupplier = await newSupplier.save();
    res.status(201).json(savedSupplier);
  } catch (err) {
    next(err);
  }
});

router.put("/:supplierId", async (req, res, next) => {
  try {
    const { supplierId } = req.params;
    const updatedData = req.body;
    const updatedSupplier = await Supplier.findByIdAndUpdate(
      supplierId,
      updatedData,
      { new: true }
    );
    if (!updatedSupplier) {
      return res.status(404).json({ message: "Supplier not found" });
    }
    res.json(updatedSupplier);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
