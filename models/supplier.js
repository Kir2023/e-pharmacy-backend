const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const supplierSchema = new Schema({
  name: String,
  address: String,
  suppliers: String,
  date: String,
  amount: String,
  status: String,
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Supplier', supplierSchema);