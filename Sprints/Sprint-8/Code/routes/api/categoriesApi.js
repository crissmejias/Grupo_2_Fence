const express = require("express");
const router = express.Router();
const Controller = require("../../controllers/api/categoriesControllerApi");

router.get("/", Controller.getCategories);

module.exports = router;
