const express = require("express");
const requestController = require("../controllers/requestController");
const authController = require("../controllers/authController");

const router = express.Router();

router
  .route("/")
  .post(requestController.createRequest)
  .get(authController.protect, requestController.getAllRequests);

router
  .route("/approve")
  .post(requestController.setApproval);

router
  .route("/get")
  .get(requestController
  .getRequestsbyStudentId);

  router
  .route("/add")
  .post(requestController
  .addAdditionalInfo);


module.exports = router;
