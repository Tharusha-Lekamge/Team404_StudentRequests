const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");
const jwt = require("jsonwebtoken");

const User = require("../models/userModel");

/**
 * Creates a new user with given details, save it to the database, and return a jwt with user details.
 * Cannot be used to create admins. any attempt to create admin accounts will result in aan error.
 * @api {post} /signup/
 * @apiName signup
 * @apiGroup Auth
 * @apiParams req.body - Should contain all details required for creating a new user.
 * @requestDetails username, password, passwordConfirm, accountType
 * @apiSuccess
 * @apiSuccessExample
 * @apiError
 * @apiErrorExample
 */
exports.signUp = catchAsync(async (req, res, next) => {
  if (req.body.accountType === "admin") {
    return next(new AppError("Access denied to create an admin account", 401));
  } else {
    const newUser = User.create({
      username: req.body.username,
      password: req.body.password,
      passwordConfirm: req.body.passwordConfirm,
      accountType: req.body.accountType,
    });

    const token = jwt.sign({ id: newUser.__id }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRES,
    });

    res.status(200).json({
      status: success,
      token,
    });
  }
});

/**
 * Creates a new admin with given details, save it to the database, and return a success message with the new user data.
 * @api {post} /createAdmin/
 * @apiName createAdmin
 * @apiGroup Auth
 * @apiParams req.body - Should contain all details required for creating a new user.
 * @requestDetails username, password, passwordConfirm, accountType: "admin"
 * @apiSuccess
 * @apiSuccessExample
 * @apiError
 * @apiErrorExample
 */
exports.createAdmin = catchAsync(async (req, res, next) => {
  const newUser = User.create({
    username: req.body.username,
    password: req.body.password,
    passwordConfirm: req.body.passwordConfirm,
    accountType: "admin",
  });
});

exports.login = catchAsync(async (req, res, next) => {
  const { username, password } = req.body;

  // Checking for existence of username and password
  if (!username || !password) {
    const errorString = "No valid ";
    if (!username) {
      errorString += "username ";
    }
    if (!password) {
      errorString += "password ";
    }
    return next(new AppError(errorString, 400));
  }
  // Checking for user
  const user = User.findOne();
  // Send token to user
});
