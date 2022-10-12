const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");

const Request = require("../models/requestModel");

/**
 * Creates a new Request document using the data given in the res.body.
 * All required data should be enclosed in req.body.
 * @api {post} /request/ 
 * @apiName createRequest
 * @apiGroup Request
 * @apiParams req.body - shpuld contain all relavant details in json format. 
 * Required details are user, request type, approval status (default is 'pending')
 * @apiSuccess
 * @apiSuccessExample
 * @apiError 
 * @apiErrorExample
 */
exports.createRequest = catchAsync(async (req, res, next) => {
  const newRequest = await Request.create(req.body);
});

/**
 * 
 * @api  
 * @apiName 
 * @apiGroup 
 * @apiParams 
 * @apiSuccess
 * @apiSuccessExample
 * @apiError 
 * @apiErrorExample
 */
exports.setApproval = catchAsync(async (req, res, next) => {});

/**
 * 
 * @api  
 * @apiName 
 * @apiGroup 
 * @apiParams 
 * @apiSuccess
 * @apiSuccessExample
 * @apiError 
 * @apiErrorExample
 */
exports.addAdditionalInfo = catchAsync(async (req, res, next) => {});