const express = require("express");
const router = express.Router();
const usersRoutes = require("./system/usersRoutes");
const companiesRoutes = require("./system/companiesRoutes");
const clientsRoutes = require("./company/clientsRoutes");
const dbMiddleware = require("../../middlewares/dbMiddleware");

router.get("/", (req, res) => {
  res.send("Bem-vindo à API!");
});

router.use("/api/users", dbMiddleware, usersRoutes);
router.use("/api/companies", dbMiddleware, companiesRoutes);
router.use("/api/tenant/clients", dbMiddleware, clientsRoutes);

module.exports = router;
