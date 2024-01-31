const express = require("express");
const router = express.Router();
const UserController = require("../../controllers/system/userController");

router.post("/", UserController.creater);
router.post("/code/:id", UserController.confirmCodeEmail);
router.post("/login", UserController.login);
router.get("/token", UserController.getByToken);
router.put("/:id", UserController.updater);
router.delete("/:id", UserController.deleter);

module.exports = router;
