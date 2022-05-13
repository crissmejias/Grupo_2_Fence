const { Router } = require("express");
const express = require("express");
const productsControllers = require("../controllers/productsControllers");
const router = express.Router();
const productsController = require("../controllers/productsControllers");
router.get("/", productsController.productsList);
router.get("/createProduct", productsController.createProduct);
router.get("/:idProduct", productsController.detalleProduct);
router.post("/createProduct", productsController.recordProduct)
router.get("/:idProduct/edit", productsController.editProduct);
router.put("/:idProduct/edit", productsController.putProduct);
router.delete("/:idProduct", productsController.deleteProduct);
    
    

module.exports = router;
