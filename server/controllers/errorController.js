const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");

const sendDevError = (err, req, res, next) => {
  res.status(err.statusCode).json({
    status: err.status,
    message: err.message,
    error: error,
    stack: err.stack,
  });
};

const sendProductionError = (err, req, res, next) => {
  if (err.isOperational) {
    res.status(err.statusCode).json({
      status: err.status,
      message: err.message,
    });
  } else {
    //unknown error

    // Log the error
    console.error("ERROR", err);
    // Use a logger if possible
    res.status(err.statusCode).json({
      status: "ERROR",
      message: "An Unknown Error Occured",
    });
  }
};

module.exports = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || "Unidentified Error";

  if (process.env.NODE_ENV === "development") {
    sendDevError(err, req, res, next);
  } else {
    sendProductionError((err, req, res, next));
  }
};