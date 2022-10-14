const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");

const Request = require("../models/requestModel");

/**
 * Creates a new Request document using the data given in the res.body.
 * All required data should be enclosed in req.body.
 * @api {post} /request/
 * @apiName createRequest
 * @apiGroup Request
 * @apiParams req.body - should contain all relavant details in json format.
 * @requiredFields userIndexNo, userName, requestType, requestInfo, submittedDate
 * @apiSuccess
 * @apiSuccessExample
 * @apiError
 * @apiErrorExample
 */
exports.createRequest = catchAsync(async (req, res, next) => {
  const newRequest = await Request.create(req.body);
  if (!newRequest) {
    return next(new AppError("No new request is created", 404));
  }
  res.status(201).json({
    status: "New request submitted successfully",
    request: newRequest,
  });
});

/**
 * Finds all requests made by every student. Should be only used by staff. Returns a JSON object
 * with all matching results. Filtering and sorting are inbuilt and should be passed via
 * query parameters.
 * @api {get} /request/
 * @apiName getAllRequests
 * @apiGroup Request
 * @apiParams req.query - Can be empty. Else pass the parameters for filtering and sorting purposes.
 * Can set pagination and items per page limits.
 * @availableFilters userIndexNo, userName, requestType, approvalStatus
 * @apiSuccess
 * @apiSuccessExample
 * @apiError
 * @apiErrorExample
 */
exports.getAllRequests = catchAsync(async (req, res, next) => {
  const queryObj = { ...req.query }; // Get a hard copy of the query object
  const excludedFields = ["page", "sort", "limit", "fields"]; // Special fields in the query needed for other applications
  excludedFields.forEach((el) => delete queryObj[el]); // Delete above special fields from the query object for filtering

  // First Build the query without awaiting the results and after chaining all functionalities, await the query
  const query = Request.find(queryObj);

  const requests = await query;
});

exports.setApproval = catchAsync(async (req, res, next) => {});

exports.addAdditionalInfo = catchAsync(async (req, res, next) => {});
