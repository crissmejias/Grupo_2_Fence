const { Router } = require("express");
const express = require("express");
const router = express.Router();
const productsController = require("../controllers/productsControllers");
router.get("/", productsController.productsList);
router.get("/createProduct", productsController.createProduct);
router.get("/:idProduct", productsController.detalleProduct);
router.post("/createProduct", productsController.recordProduct)




module.exports = router;
