//user
const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.js");

router.get("/signup", userController.new);
router.get("/login", userController.existing);

// router.get("/:id", userController.show);
// router.post("/", userController.create);

module.exports = router;