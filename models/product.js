const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
  id: Number,
  photo: String,
  name: String,
  suppliers: String,
  stock: Number,
  price: Number,
  category: String,
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Product', productSchema);
