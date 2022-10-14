const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");

const User = require("../models/userModel");

/**
 * Creates a new user with given details, save it to the database, and return a success message with the new user data.
 * @api {post} /signup/
 * @apiName createUser
 * @apiGroup User
 * @apiParams req.body - Should contain all details required for creating a new user.
 * @requestDetails username, password, passwordConfirm, accountType(student, staff, admin)
 * @apiSuccess
 * @apiSuccessExample
 * @apiError
 * @apiErrorExample
 */
exports.createUser = catchAsync(async (req, res, next) => {
  const newUser = await User.create(req.body);
});
exports.deleteUser = catchAsync(async (req, res, next) => {});

exports.getAllUsers = catchAsync(async (req, res, next) => {});
exports.getUser = catchAsync(async (req, res, next) => {});
exports.updateUser = catchAsync(async (req, res, next) => {});
