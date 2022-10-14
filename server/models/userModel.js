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
    select: false,
  },
  passwordConfirm: {
    type: String,
    required: true,
    minLength: 8,
    validate: function (el) {
      // On CREATE and SAVE only
      return el === this.password;
    },
    select: false,
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

// Check if an entered password matches with the password stored in the databse
// Available on all user documents
userSchema.methods.correctPassword = async function (candidatePass, userPass) {
  return await bcrypt.compare(candidatePass, userPass);
};

const User = mongoose.model("User", userSchema);

module.exports = User;
