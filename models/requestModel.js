const mongoose = require("mongoose");

const requestSchema = mongoose.Schema({
  userIndexNo: {
    type: String,
    required: true,
  },
  userName: {
    type: String,
    required: true,
  },
  requestType: {
    type: String,
    required: true,
    enum: {
      values: ["late-add-drop", "extend-deadline", "repeat-as-first-attempt"],
      message: "This request type is invalid",
    },
  },
  requestInfo: {
    type: String,
    required: true,
  },
  additionalDetails: {
    type: String,
  },
  approvalStatus: {
    type: String,
    enum: {
      values: ["pending", "approved", "declined"],
      message: "Choose from pending, approved, or declined",
    },
    default: "pending",
  },
  submittedDate: {
    type: Date,
    required: true,
  },
});

const Request = mongoose.model("Request", requestSchema);

module.exports = Request;
