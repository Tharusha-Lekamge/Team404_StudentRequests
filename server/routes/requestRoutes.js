const express = require("express");
const requestController = require("../controllers/requestController");
const authController = require("../controllers/authController");

const router = express.Router();

router
  .route("/")
  .post(requestController.createRequest)
  .get(authController.protect, requestController.getAllRequests);

module.exports = router;
