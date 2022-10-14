const express = require("express");
const requestController = require("../controllers/requestController");

const router = express.Router();

router
  .route("/")
  .post(requestController.createRequest)
  .get(requestController.getAllRequests);

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
