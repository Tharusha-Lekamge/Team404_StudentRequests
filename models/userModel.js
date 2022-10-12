const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: [true, "username Field cannot be empty"],
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minLength: 8,
  },
  passwordConfirm: {
    type: String,
    required: true,
    minLength: 8,
  },
  indexNo: {
    type: String,
  },
  accountType: {
    type: String,
    required: true,
    enum: ["student", "staff", "admin"],
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
