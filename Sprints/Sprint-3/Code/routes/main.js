const express = require("express");
const router = express.Router();
const mainControllers = require("../controllers/mainControllers");
router.get("/", mainControllers.index);
router.get("/login", mainControllers.login);
router.get("/productDetail", mainControllers.productdetail);
router.get("/quoter", mainControllers.quoter);
router.get("/register", mainControllers.register);
router.get("/productList", mainControllers.products);
router.get("/newProduct", mainControllers.newProduct);

module.exports = router;
