const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema = new Schema({
  photo: { type: String, required: true },
  name: { type: String, required: true },
  address: { type: String, required: true },
  products: { type: String, required: true },
  price: { type: String, required: true },
  status: { type: String, required: true },
  order_date: { type: Date, required: true },
});

module.exports = mongoose.model("Order", orderSchema);
