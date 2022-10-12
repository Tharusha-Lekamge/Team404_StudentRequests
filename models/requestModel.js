const mongoose = require("mongoose");

const requestSchema = mongoose.Schema({
  user: {
    type: String,
    required: true,
    unique: true,
  },
  requestType: {
    type: String,
    required: true,
  },
  additionalDetails: {
    type: String,
  },
  approvalStatus: {
    type: String,
    required: true,
  },
});

const Request = mongoose.model("Request", requestSchema);

module.exports = Request;
