const express = require('express');
const router = express.Router();
const path = require('path');
const multer = require('multer');

const adminControllers = require(path.resolve(__dirname,'../controllers/adminControllers'));

const acceso = require(path.resolve(__dirname,'../middlewares/acceso'));


var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.resolve(__dirname, '../public/images'));
    },
    filename: function (req, file, cb) {
      cb(null, 'valla-'+Date.now()+path.extname(file.originalname))
    }
  })
   
  const upload = multer({ storage })

router.get('/products/productList', acceso, adminControllers.index);
router.get('/products/newProduct', adminControllers.create);
router.post('/products/productList', upload.single('imagen'), adminControllers.save);
router.get('/products/productDetail/:id', adminControllers.show);
router.get('/products/productList/:id', adminControllers.edit);
router.put('/products/productList/:id', upload.single('imagen'), adminControllers.update);
router.get('/products/productDetail/:id', adminControllers.destroy);

module.exports = router;