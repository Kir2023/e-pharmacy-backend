const express = require("express");
const router = express.Router();
const Product = require("../models/product");

router.get("/", async (req, res, next) => {
  try {
    const { sortBy, sortOrder, category, supplier, priceRange, search } =
      req.query;

    let filter = {};

    if (category) {
      filter.category = category;
    }

    if (supplier) {
      filter.suppliers = supplier;
    }

    if (priceRange) {
      const [minPrice, maxPrice] = priceRange.split("-").map(Number);
      filter.price = { $gte: minPrice, $lte: maxPrice };
    }

    if (search) {
      filter.name = new RegExp(search, "i");
    }

    let sort = {};
    if (sortBy) {
      sort[sortBy] = sortOrder === "desc" ? -1 : 1;
    }

    const products = await Product.find().select(
      "photo name suppliers stock price category"
    );

    res.json({
      products,
    });
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const { photo, name, suppliers, stock, price, category } = req.body;

    const newProduct = new Product({
      photo,
      name,
      suppliers,
      stock,
      price,
      category,
    });

    await newProduct.save();

    res.status(201).json(newProduct);
  } catch (error) {
    next(error);
  }
});

router.put("/:productId", async (req, res, next) => {
  try {
    const { productId } = req.params;
    const { photo, name, suppliers, stock, price, category } = req.body;

    const updatedProduct = await Product.findByIdAndUpdate(
      productId,
      { photo, name, suppliers, stock, price, category },
      { new: true, runValidators: true }
    );

    if (!updatedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.json(updatedProduct);
  } catch (error) {
    next(error);
  }
});

router.delete("/:productId", async (req, res, next) => {
  try {
    const { productId } = req.params;

    const deletedProduct = await Product.findByIdAndDelete(productId);

    if (!deletedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.json({ message: "Product deleted successfully" });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
