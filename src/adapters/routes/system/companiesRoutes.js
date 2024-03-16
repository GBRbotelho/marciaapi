const express = require("express");
const router = express.Router();
const CompanyController = require("../../controllers/system/companyController");

router.post("/", CompanyController.creater);
router.get("/admin/:id", CompanyController.getByAdmin);
router.get("/:id", CompanyController.getById);

module.exports = router;
