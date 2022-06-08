const express = require('express');
const router = express.Router();
// multer paso 2//
const path = require('path');
const multer = require('multer');

//A continuación el código del ejemplo para pensarlo como guia
// // Controller
const usersController = require('../controllers/usersControllers');

// // Middlewares
//multer paso 3
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.resolve(__dirname, '../public/images-multer'));
    },
    filename: function (req, file, cb) {
      cb(null, 'avatar-'+Date.now()+path.extname(file.originalname))
    }
  })

//multer paso 4
const upload = multer({ storage });
// const uploadFile = require('../middlewares/multerMiddleware');
const validations = require('../middlewares/validateRegisterMiddleware');
const guestMiddleware = require('../middlewares/guestMiddleware');
const authMiddleware = require('../middlewares/authMiddleware');

// // Formulario de registro
router.get('/register', guestMiddleware, usersController.register);
//router.get('/register',usersController.register);

// // Procesar el registro             // FALTA MIDDLEWARE DE VALIDACION EN VISTAS
// router.post('/register', uploadFile.single('avatar'), validations, usersController.processRegister);
router.post('/register',guestMiddleware,upload.single("file"), validations, usersController.recordUser);

// // Formulario de login
router.get('/login', guestMiddleware, usersController.login);

// // Procesar el login
router.post('/userList', usersController.loginProcess);




//Ruta Lista usuarios
router.get('/userList',authMiddleware,usersController.userList);

// Ruta de edición de perfil
// router.get('/userDetail', authMiddleware, usersController.userDetail);


// // Logout
// router.get('/logout/', usersController.logout);

//edicion de usuarios
router.get("/:idUser/edit",authMiddleware, usersController.editUser);

router.put("/:idUser/edit",authMiddleware, upload.single('newImage'), usersController.putUser);  

// borrar usuario
router.delete('/:idUser/delete',authMiddleware, usersController.deleteUser);

//logout
router.get('/logout', usersController.logout);

module.exports = router;