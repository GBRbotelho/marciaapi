const express = require("express");
const router = express.Router();
const ClientController = require("../../controllers/company/clientController");

router.post("/", ClientController.creater);

module.exports = router;
