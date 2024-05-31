const mongoose = require('mongoose');

// Определяем схему пользователя
const customerSchema = new mongoose.Schema({
  photo: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  spent: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  register_date: {
    type: Date,
    required: true
  }
});

// Создаем модель Customer на основе схемы
const Customer = mongoose.model('Customer', customerSchema);

module.exports = Customer;
