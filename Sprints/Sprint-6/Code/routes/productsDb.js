/*
const { Router } = require("express");
const express = require('express');
const router = express.Router();
const productsControllersDb = require('../controllers/productsControllersDb');



// multer paso 2//
const path = require('path');
const multer = require('multer');


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






//rutas para Sprint 6-Base de datos

router.get("/", authMiddleware,productsControllersDb.productsList);//falta en controller
router.get("/createProduct", productsControllersDb.createProduct);//falta en controller
router.get("/:idProduct", productsControllersDb.detalleProduct);//falta en controller
//multer paso 5
router.post("/createProduct", upload.single('file'), productsControllersDb.recordProduct)

router.get("/:idProduct/edit",authMiddleware,productsControllersDb.editProduct);//falta en controller
//multer paso 5 
router.post("/:idProduct/edit", upload.single('newImage'), productsControllersDb.putProduct); //sacar en vista editProduct el código del put
router.post("/:idProduct", productsControllersDb.deleteProduct);//ver si hacemos vista del delete y borrar en vista productList el código del metodo delete
    
    





module.exports = router;

*/