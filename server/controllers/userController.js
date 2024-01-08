const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");

const User = require("../models/userModel");

exports.createUser = catchAsync(async (req, res, next) => {});
exports.deleteUser = catchAsync(async (req, res, next) => {
  let user = await User.deleteOne({ indexNo: req.body.id });
  if (!user) {
    return next(new AppError("Cannot find the specified user"), 401);
  }
  res.status(200).json({
    status: "Success",
    data: {
      requests: user,
    },
  });
});

exports.getAllUsers = catchAsync(async (req, res, next) => {
  let users = await User.find();
  if (!users) {
    return next(new AppError("Cannot find users in the DB", 400));
  }
  res.status(200).json({
    status: "Success",
    data: {
      requests: users,
    },
  });
});
exports.getUser = catchAsync(async (req, res, next) => {
  let user = await User.findOne({ indexNo: req.body.id });
  if (!user) {
    return next(new AppError("Cannot find the specified user"), 401);
  }
  res.status(200).json({
    status: "Success",
    data: {
      requests: user,
    },
    id: req.query.id,
  });
});
exports.updateUser = catchAsync(async (req, res, next) => {
  const pw = req.body.password;
  const cpw = req.body.passwordConfirm;
  if (pw === cpw) {
    let user = await User.findOne({ indexNo: req.body.user_id });
    let result = await User.findByIdAndUpdate(user.id, {
      password: pw,
      passwordConfirm: cpw,
    });
    res.status(200).json({
      status: "Success",
      data: {
        result: result,
      },
    });
  } else {
    return next(new AppError("Password Mismatch", 401));
  }
});
