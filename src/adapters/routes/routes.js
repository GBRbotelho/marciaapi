const express = require("express");
const router = express.Router();
const usersRoutes = require("./system/usersRoutes");

router.get("/", (req, res) => {
  res.send("Bem-vindo à API!");
});

router.use("/api/users", usersRoutes);

module.exports = router;
