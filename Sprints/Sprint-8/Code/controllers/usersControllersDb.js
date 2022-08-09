
const db = require('../database-db/models');
const sequelize = db.sequelize;
const path = require("path");
const fs = require("fs");
const { parse } = require("path");
const pathToUsers = path.join(__dirname, "../database/users.json");// parseo del JSON
const usersList = fs.readFileSync(pathToUsers);// parseo del JSON
const usuarios = JSON.parse(usersList);// parseo del JSON
const bcryptjs = require('bcryptjs');// para poder encriptar
const { validationResult } = require('express-validator');// para poder implementar validación en el CRUD de usuarios
const User = require('../models/User');// se requiere models
const cookie = require("cookie-parser");
const usersController = {

// para renderizar userList
	userList: (req,res)=>{
        db.User.findAll().then(user => {
            res.render('userList', {user,userLogged: req.session.userLogged })
        });
	},
// para renderizar userDetail
	profile: (req,res)=>{
		res.render('userDetail',{userLogged: req.session.userLogged});
	},
// para renderizar register
	register: (req, res) => {    
		res.render("register",{userLogged: req.session.userLogged});
	},

// para renderizar login
	login: (req, res) => {    
		res.render("login");
  	},

	  // para registrar nuevo usuario desde register
	  recordUser: (req,res)=>{

		// const resultValidation = validationResult(req);
		// // if (resultValidation.errors.length > 0) {
		// // 	return res.render('register', {
		// // 		errors: resultValidation.mapped(),
		// // 		oldData: req.body
		// // 	});
		// // }
        
        db.User.create({
          nombre: req.body.nombre,
		  apellido: req.body.apellido,
		  email: req.body.email,
		  password: bcryptjs.hashSync(req.body.password, 10),
		  categoria: req.body.categoria,
          imagen: path.join('/images-multer/', req.file.filename)
        }).then(resultado => res.redirect('/'))
        .catch(err => console.log(err));
       
	
		},
        editUser: async (req,res) => {

			let id = req.params.idUser;
		try{
			let usuarioSeleccionado = await db.User.findByPk(id);	
			res.render('editUser',{usuario:usuarioSeleccionado,userLogged: req.session.userLogged})
        }
        catch(err){
            console.log(err);
        }
        },
		putUser : async (req,res) => {
            const idUser = req.params.idUser;
            const nombre = req.body.nombre;
            const apellido = req.body.apellido;
            const email = req.body.email;
            const usuarioPassword = await db.User.findByPk(idUser);
          if(req.body.password == ''){
            var password = usuarioPassword.password;}
		  else{ password =  bcryptjs.hashSync(req.body.password, 10);}
		  const categoria = req.body.categoria;
		
		//let newImage = path.join('/images-multer/', req.body.newImage); acá se aramaba mal path porque sacaba el mombre del archivo del body y hay que sacarlo der file del multer
		if(req.file){
        var imagen = path.join("/images-multer/",req.file.filename); 
        }
		// let oldImage = req.body.oldImage; 
		// const imagen = newImage;
		// console.log(req.file);
		// console.log(newImage);
		// console.log(oldImage);
		db.User.update(
            {nombre, apellido,email,password,categoria,imagen},
            {where: {id_users: idUser}})
            .then(resultado => {
                res.redirect('/users/userList')
            })
            .catch(err=>{
                console.log(err);
            })
        },


		loginProcess: async (req, res) => {
			let userToLogin = await db.User.findOne({where:{email: req.body.email}, raw: true, nest: true});
            let usuarios = await db.User.findAll();
			if(userToLogin) {
				let isOkThePassword = bcryptjs.compareSync(req.body.password, userToLogin.password);
                console.log(isOkThePassword);
				if (isOkThePassword) {
					delete userToLogin.password;
					req.session.userLogged = userToLogin;
					if(req.body.recordar != undefined){
						res.cookie('user', userToLogin.email, {maxAge: 60000})	;
					}
					if(userToLogin.categoria == 'Admin'){
					return res.render('userList', { userLogged: userToLogin, user: usuarios}); 
					}
					else if( userToLogin.categoria == 'Guest'){
						return res.redirect('/'); 
					}
	
				} 
				else
				{
				return res.render('login', {		// si el login NO da ok, muestra errores en login
					errors: {
						email: {
							msg: 'Las credenciales son inválidas'
						}
					}
				});
			}
		}
			
			
	
//			return res.render('userLoginForm', {
//				errors: {
//					email: {
//						msg: 'No se encuentra este email en nuestra base de datos'
//					}
	
//			});
//		},

// }
	},
	userDetail: (req,res) => {
		console.log(req.session);
		res.render('userDetail');
	},
	deleteUser: (req,res) => {
		let userDelete = req.params.idUser;
        console.log(userDelete);
        db.User.destroy({where:{id_users:userDelete}})
        .then(resultado => {
            res.redirect('/');
        })
        .catch(err=>{console.log(err)})

	},
	logout: (req,res)=> {
		res.clearCookie('user');
		req.session.destroy(err => {
			if(err) {
				console.log(err)
			}else{
				return res.redirect('/');
			}
		});
		
	}
}
module.exports = usersController;
