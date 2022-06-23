const { Router } = require("express");
const express = require("express");
const productsControllers = require("../controllers/productsControllersDb");
const router = express.Router();
// multer paso 2//
const path = require('path');
const multer = require('multer');


const productsController = require("../controllers/productsControllers");
const authMiddleware = require("../middlewares/authMiddleware");

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


router.get("/", authMiddleware,productsControllers.productsList);
router.get("/createProduct",authMiddleware, productsControllers.createProduct);
router.get("/:idProduct",authMiddleware, productsControllers.detalleProduct);
//multer paso 5
router.post("/createProduct",authMiddleware, upload.single('file'), productsControllers.recordProduct)

router.get("/:idProduct/edit",authMiddleware,productsControllers.editProduct);
//multer paso 5 
router.put("/:idProduct/edit",authMiddleware, upload.single('newImage'), productsControllers.putProduct); //No coincidia con el name del input en el FORM 

router.delete("/:idProduct",authMiddleware ,productsControllers.deleteProduct);
    
    

module.exports = router;
