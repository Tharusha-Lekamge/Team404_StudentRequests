const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");

/**
 * 
 * @param {*} err 
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 * Pass the err object to this function.
 * Process the error mesg and returns a measningful error message 
 * to be passed with the res object.
 * error it self and the stack trace of the error is also sent
 * along with the error message for debugging purposes.
 * This function is used for displaying errors in the development stage
 */
const sendDevError = (err, req, res, next) => {
  res.status(err.statusCode).json({
    status: err.status,
    message: err.message,
    error: error,
    stack: err.stack,
  });
};

/**
 * 
 * @param {*} err 
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 * Pass the err object to this function.
 * Process the error mesg and returns a meaningful simplified error message 
 * to be passed with the res object.
 * This function is used for displaying errors in the deployed stage
 */
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


handleCastError = (err) =>{
  const message = `Invalid ${err.path}: ${err.path}`;
  return new AppError(message, 400);
}

module.exports = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || "Unidentified Error";

  if (process.env.NODE_ENV === "development") {
    sendDevError(err, req, res, next);
  } else {
    let error = {...err};
    // Send specific error messages for commonly occuring errors here.
    // Use err.name for identifying the errors
    if (err.name === 'CastError') {
      error = handleCastError(err)
    }
    // Use this for uncommon errors only
    sendProductionError((err, req, res, next));
  }
};