const { Router } = require("express");
const express = require("express");
const productsControllers = require("../controllers/productsControllers");
const router = express.Router();
// multer paso 2//
const path = require('path');
const multer = require('multer');


const productsController = require("../controllers/productsControllers");

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


router.get("/", productsController.productsList);
router.get("/createProduct", productsController.createProduct);
router.get("/:idProduct", productsController.detalleProduct);
//multer paso 5
router.post("/createProduct", upload.single('file'), productsController.recordProduct)

router.get("/:idProduct/edit", productsController.editProduct);
//multer paso 5 
router.put("/:idProduct/edit", upload.single('newImage'), productsController.putProduct); //No coincidia con el name del input en el FORM 

router.delete("/:idProduct", productsController.deleteProduct);
    
    

module.exports = router;
