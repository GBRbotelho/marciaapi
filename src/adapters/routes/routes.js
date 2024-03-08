const express = require("express");
const router = express.Router();
const usersRoutes = require("./system/usersRoutes");
const dbMiddleware = require("../../middlewares/dbMiddleware");

router.get("/", (req, res) => {
  res.send("Bem-vindo à API!");
});

router.use("/api/users", dbMiddleware, usersRoutes);

module.exports = router;
