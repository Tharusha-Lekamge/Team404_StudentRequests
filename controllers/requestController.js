const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");

const Request = require("../models/requestModel");

/**
 * Creates a Neq Request using the data given in the res.body.
 * All required data should be enclosed in req.body.
 */
exports.createRequest = catchAsync(async (req, res, next) => {
  const newRequest = await Request.create(req.body);
});
