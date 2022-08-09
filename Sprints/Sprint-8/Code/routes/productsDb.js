const { Router } = require("express");
const express = require("express");
const productsControllersDb = require("../controllers/productsControllersDb");
const router = express.Router();
// multer paso 2//
const path = require('path');
const multer = require('multer');


//const productsController = require("../controllers/productsControllers");
const authMiddleware = require("../middlewares/authMiddleware");
const guestUser = require('../middlewares/userGuest');
//multer paso 3
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.resolve(__dirname, '../public/images-multer'));
    },
    filename: function (req, file, cb) {
      cb(null, 'valla-'+Date.now()+path.extname(file.originalname))
    }
  })

//multer paso 4
  const upload = multer({ storage })


router.get("/",productsControllersDb.productsList);
router.get("/createProduct",guestUser ,productsControllersDb.createProduct);
router.get("/:idProduct", productsControllersDb.detalleProduct);
//multer paso 5
router.post("/createProduct", productsControllersDb.recordProduct)

router.get("/:idProduct/edit",authMiddleware, guestUser,productsControllersDb.editProduct);
//multer paso 5 
router.put("/:idProduct/edit",guestUser, productsControllersDb.putProduct); 

router.delete("/delete/:idProduct", guestUser,productsControllersDb.deleteProduct);
    
    

module.exports = router;


