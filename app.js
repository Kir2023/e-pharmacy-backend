const express = require("express");
const logger = require("morgan");
const cors = require("cors");

const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());

const authRouter = require('./routes/auth');
app.use('/api/user/login', authRouter);

const userRoutes = require('./routes/userRoutes');
app.use('/api', userRoutes);

const customersRouter = require('./routes/customers');
app.use('/api/customers', customersRouter);

app.all("*", (req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err, req, res, next) => {
  const { status = 500, message = "Server error" } = err;
  res.status(status).json({ message });
});

module.exports = app;