require("dotenv").config();
require("./db");

const PORT = process.env.PORT || 3000;

const app = require("./app");

const Customer = mongoose.model('Customer', customerSchema);

// Эндпоинт для получения всех пользователей
app.get('/api/customers', async (req, res) => {
  try {
    const customers = await Customer.find();
    res.json(customers);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.listen(PORT, () => {
  console.log(`Server running. Use our API on port: ${PORT}`);
});