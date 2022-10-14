class AppError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
    // 400 are fails, 500 are errors
    this.status = `${statusCode}`.startsWith("4") ? "fail" : "error";

    //All errors handled by this class are Operational errors
    this.isOperational = true;

    // Where the error happened
    Error.captureStackTrace(this, this.constructor);
  }
}

module.exports = AppError;
