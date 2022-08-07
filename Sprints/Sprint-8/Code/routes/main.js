const express = require("express");
const router = express.Router();
const mainControllers = require("../controllers/mainControllers");
const guestMiddleware = require("../middlewares/guestMiddleware");
router.get("/", mainControllers.index);
router.get("/login", guestMiddleware ,mainControllers.login);
router.get("/productDetail", mainControllers.productdetail);
router.get("/quoter", mainControllers.quoter);
router.get("/register", guestMiddleware, mainControllers.register);
router.get("/productList", mainControllers.products);
router.get("/newProduct", mainControllers.newProduct);

module.exports = router;
