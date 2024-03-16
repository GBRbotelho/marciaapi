const express = require("express");
const router = express.Router();
const ClientController = require("../../controllers/company/clientController");

router.post("/", ClientController.creater);
router.get("/", ClientController.getAll);

module.exports = router;
