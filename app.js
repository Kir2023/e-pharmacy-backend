const express = require("express");
const logger = require("morgan");
const cors = require("cors");

const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(express.urlencoded({ extended: false }));
app.use(cors({}));
app.use(express.json());

const authRouter = require("./routes/auth");
app.use("/api/user", authRouter);

const userRoutes = require("./routes/userRoutes");
app.use("/api/user/user-info", userRoutes);

const dashboardRouter = require("./routes/dashboard");
app.use("/api/dashboard", dashboardRouter);

const ordersRouter = require("./routes/orders");
app.use("/api/orders", ordersRouter);

const productsRouter = require("./routes/products");
app.use("/api/products", productsRouter);

const customersRouter = require("./routes/customers");
app.use("/api/customers", customersRouter);

app.all("*", (req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err, req, res, next) => {
  const { status = 500, message = "Server error" } = err;
  res.status(status).json({ message });
});

module.exports = app;
