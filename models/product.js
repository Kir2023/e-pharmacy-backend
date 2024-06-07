const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  photo: { type: String, required: true },
  name: { type: String, required: true },
  suppliers: { type: String, required: true },
  stock: { type: Number, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
});

module.exports = mongoose.model("Product", productSchema);
