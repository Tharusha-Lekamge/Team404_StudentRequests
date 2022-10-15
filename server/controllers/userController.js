const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");

const User = require("../models/userModel");


exports.deleteUser = catchAsync(async (req, res, next) => {
   
    try{
        let user = await User.deleteOne({indexNo:req.body.id});
        res.status(200).json({
          status: "Success",
          data: {
            requests: user,
          },
        });
      
      }catch(err){
        res.status(400).json({
          status: "Failed to get user",
          data: {
            err,
          },
        });
      }
      
});

exports.getAllUsers = catchAsync(async (req, res, next) => {
    try{
        let users = await User.find();
        res.status(200).json({
          status: "Success",
          data: {
            requests: users,
          },
        });
      
      }catch(err){
        res.status(400).json({
          status: "Failed to get users",
          data: {
            err,
          },
        });
      }
      
});

exports.getUser = catchAsync(async (req, res, next) => {
    
    try{
        let user = await User.findOne({indexNo:req.body.id});
        res.status(200).json({
          status: "Success",
          data: {
            requests: user,
          },
          id: req.query.id
        });
      
      }catch(err){
        res.status(400).json({
          status: "Failed to get user",
          data: {
            err,
          },
        });
      }
      
});


exports.updatePassword = catchAsync(async (req, res, next) => {

    try{
        const pw = req.body.password
        const cpw = req.body.passwordConfirm
        if (pw === cpw){
            let user = await User.findOne({indexNo:req.body.user_id});
            let result = await User.findByIdAndUpdate(user.id,{password:pw, passwordConfirm:cpw});            
            res.status(200).json({
            status: "Success",
            data: {
                result: result,
            },
        });
        }            
        else{
            res.status(200).json({
                status: "Failure",
                message: "Passwords mismatch"
            })
        }
      
      }catch(err){
        res.status(400).json({
          status: "Failed to approve",
          data: {
            err,
          },
        });
      }
});
