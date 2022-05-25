const path = require("path");
const fs = require("fs");
const { parse } = require("path");
const pathToUsers = path.join(__dirname, "../database/users.json");// parseo del JSON
const usersList = fs.readFileSync(pathToUsers);// parseo del JSON
const usuarios = JSON.parse(usersList);// parseo del JSON
const bcryptjs = require('bcryptjs');// para poder encriptar
const { validationResult } = require('express-validator');// para poder implementar validación en el CRUD de usuarios
const User = require('../models/User');// se requiere models

const usersController = {

// para renderizar userList
	userList: (req,res)=>{
		res.render("userList");
	},
// para renderizar userDetail
	profile: (req,res)=>{
		res.render('userDetail');
	},
// para renderizar register
	register: (req, res) => {    
		res.render("register");
	},

// para renderizar login
	login: (req, res) => {    
		res.render("login");
  	},

	  // para registrar nuevo usuario desde register
	  recordUser: (req,res)=>{

		const resultValidation = validationResult(req);

		if (resultValidation.errors.length > 0) {
			return res.render('register', {
				errors: resultValidation.mapped(),
				oldData: req.body
			});
		}

		let listadoIds = usuarios.map(el=>{return el.id});
		  let maxId = listadoIds.reduce((previous,current)=>{
			return (current > previous) ? current : previous
		  });
		let newUser = {
		  id: maxId +1,
		  nombre : req.body.nombre,
		  apellido: req.body.apellido,
		  email: req.body.email,
		  password: bcryptjs.hashSync(req.body.password, 10),
		  categoria: req.body.categoria,
		  imagen: path.join('/images/users/', req.file.filename) ,
		}
		  console.log(req.file);
		  usuarios.push(newUser);
		  let newData = JSON.stringify(usuarios,null,2);
		  fs.writeFileSync(pathToUsers,newData);
		  res.redirect('/')
		},

		loginProcess: (req, res) => {
			let userToLogin = User.findByField('email', req.body.email);
			
			if(userToLogin) {
				let isOkThePassword = bcryptjs.compareSync(req.body.password, userToLogin.password);
				if (isOkThePassword) {
					delete userToLogin.password;
					req.session.userLogged = userToLogin;

//							RECORDAR MI CUENTA					
//					if(req.body.remember_user) {
//						res.cookie('userEmail', req.body.email, { maxAge: (1000 * 60) * 60 })
					}
	
					return res.redirect('/');   // si el login da ok, redirecciona al inicio
				} 
				return res.render('login', {		// si el login NO da ok, muestra errores en login
					errors: {
						email: {
							msg: 'Las credenciales son inválidas'
						}
					}
				});
			}
	
//			return res.render('userLoginForm', {
//				errors: {
//					email: {
//						msg: 'No se encuentra este email en nuestra base de datos'
//					}
				}
//			});
//		},

// }
module.exports = usersController;
