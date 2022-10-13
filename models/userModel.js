const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

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
    validate: function (el) {
      // On CREATE and SAVE only
      return el === this.password;
    },
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

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 12);
  this.passwordConfirm = undefined;
  next();
});

const User = mongoose.model("User", userSchema);

module.exports = User;
