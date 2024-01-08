const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");
const jwt = require("jsonwebtoken");
const { promisify } = require("util");

const User = require("../models/userModel");

/**
 *
 * @param {document} user
 * @returns jwt token with the user.__id
 */
const signToken = (user) => {
  return jwt.sign(
    { id: user.__id, username: user.username, type: user.accountType },
    process.env.JWT_SECRET,
    {
      expiresIn: process.env.JWT_EXPIRES,
    }
  );
};

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

    const token = signToken(newUser);

    res.status(200).json({
      status: "success",
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
  const token = signToken(newUser);

  res.status(200).json({
    status: "success",
    token,
  });
});

/**
 * Creates a new user with given details, save it to the database, and return a jwt with user details.
 * Cannot be used to create admins. any attempt to create admin accounts will result in aan error.
 * @api {post} /login/
 * @apiName login
 * @apiGroup Auth
 * @apiParams req.body - Should contain username and password
 * @apiSuccess
 * @apiSuccessExample
 * @apiError
 * @apiErrorExample
 */
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
  const user = await User.findOne({ username }).select("+password");

  if (!user) {
    return next(new AppError("Incorrect email"), 401);
  }

  if (!(await user.correctPassword(password, user.password))) {
    return next(new AppError("Incorrect password"), 401);
  }
  // Send token to user
  const token = signToken(user);

  res.status(200).json({
    status: "success",
    token,
  });
});

/**
 *
 */
exports.protect = catchAsync(async (req, res, next) => {
  // Check if token exists in the Header -> Authentication -> Bearer
  let token;
  // Check if Authorization header is set
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  }
  // If there is no token
  if (!token) {
    return next(new AppError("No valid user", 401));
  }

  // Validate token
  // Converted the function to return a promise
  const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);

  // Check if user exists

  // Check if user changed password after jwt is issued

  // Check accountType

  // Give access
  next();
});
