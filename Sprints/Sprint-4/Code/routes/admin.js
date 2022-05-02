const express = require('express');
const router = express.Router();
const path = require('path');
const multer = require('multer');

const adminControllers = require(path.resolve(__dirname,'../controllers/adminControllers'));




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
router.get('/administradores/create', adminControllers.create);
router.post('/administradores/create', upload.single('imagen'), adminControllers.save);
router.get('/products/productDetail/:id', adminControllers.show);
router.get('/administradores/edit/:id', adminControllers.edit);
router.put('/administradores/edit/:id', upload.single('imagen'), adminControllers.update);
router.delete('/administradores/delete/:id', adminControllers.delete);

module.exports = router;
