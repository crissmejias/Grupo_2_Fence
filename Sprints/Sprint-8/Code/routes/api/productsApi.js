const { Router } = require("express");
const express = require("express");
const productsControllersApi= require("../../controllers/api/productsControllersApi");
const router = express.Router();
// multer paso 2//
const path = require('path');
// const multer = require('multer');


// //const productsController = require("../controllers/productsControllers");
// const authMiddleware = require("../middlewares/authMiddleware");

// //multer paso 3
// var storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//       cb(null, path.resolve(__dirname, '../public/images-multer'));
//     },
//     filename: function (req, file, cb) {
//       cb(null, 'valla-'+Date.now()+path.extname(file.originalname))
//     }
//   })

// //multer paso 4
//   const upload = multer({ storage })


router.get("/",productsControllersApi.productsList);
// router.get("/createProduct", productsControllersDb.createProduct);
router.get("/:idProduct", productsControllersApi.detalleProduct);
// //multer paso 5
// router.post("/createProduct", productsControllersDb.recordProduct)

// router.get("/:idProduct/edit",authMiddleware,productsControllersDb.editProduct);
// //multer paso 5 
// router.put("/:idProduct/edit", productsControllersDb.putProduct); 

// router.delete("/delete/:idProduct",productsControllersDb.deleteProduct);
    
    

module.exports = router;


