const express = require("express");
const userController = require("../controllers/userController");

const router = express.Router();

router.route("/signup").post(userController.createUser);

router.route("/login").post();

router.route("/").get(userController.getAllUsers);

router
  .route("/:id")
  .post(userController.createUser)
  .get(userController.getUser)
  .patch(userController.updateUser)
  .delete(userController.deleteUser);

module.exports = router;
