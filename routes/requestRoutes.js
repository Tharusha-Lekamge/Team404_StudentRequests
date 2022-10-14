const express = require("express");
const requestController = require("../controllers/requestController");

const router = express.Router();

router
  .route("/")
  .post(requestController.createRequest)
  .get(requestController.getAllRequests);

module.exports = router;
