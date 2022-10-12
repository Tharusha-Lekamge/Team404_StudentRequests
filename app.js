const express = require("express");
const morgan = require("morgan");
const AppError = require("./utils/appError");

const app = express();

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}
app.use(express.json());
