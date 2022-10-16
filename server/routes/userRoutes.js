const express = require("express");
const userController = require("../controllers/userController");
const authController = require("../controllers/authController");

const router = express.Router();

router.route("/signup").post(authController.signUp);

router.route("/login").post(authController.login);

router.route("/").get(authController.protect, userController.getAllUsers);

router
  .route("/id")
  .get(userController.getUser)
  .patch(userController.updateUser)
  .delete(authController.protect, userController.deleteUser);

module.exports = router;
