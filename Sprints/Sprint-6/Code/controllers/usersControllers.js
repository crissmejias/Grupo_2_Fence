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
		res.render("userList", { user: usuarios});
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
        editUser: (req,res) => {

			let id = req.params.idUser;
		
			let usuarioSeleccionado = usuarios.find(el => el.id == id);
		
			res.render('editUser',{usuario:usuarioSeleccionado,usuarios:usuarios})
			console.log(usuarioSeleccionado.id+ ' => ID DEL PRODUCTO A EDITAR - VIENE POR PARAMS');
		},
		putUser : (req,res) => {
		  const idUser = req.params.idUser;
		  const nombre = req.body.nombre;
		  const apellido = req.body.apellido;
		  const email = req.body.email;
		  const password =  bcryptjs.hashSync(req.body.password, 10);
		  const categoria = req.body.categoria;
		
		// let newImage = path.join('/images-multer/', req.body.newImage); acá se aramaba mal path porque sacaba el mombre del archivo del body y hay que sacarlo der file del multer
		let newImage= path.join("/images-multer/",req.file.filename); 
		let oldImage = req.body.oldImage; 
		const imagen = newImage;
		console.log(req.file);
		console.log(newImage);
		console.log(oldImage);
		
		  usuarios.forEach(element => {
			  if(element.id == parseInt(idUser)){
				  element.nombre = nombre;
				  element.apellido = apellido;
				  element.email = email;
				  element.password = password;
				  element.categoria = categoria;
				  element.imagen = imagen;
			  }
			});
		
			const newData = JSON.stringify(usuarios,null,2);
			// console.log(parseInt(idProduct));
			// console.log (newData);
		
			fs.writeFileSync(pathToUsers,newData);
		
		
			res.redirect("/")
		},


		loginProcess: (req, res) => {
			let userToLogin = User.findByField('email', req.body.email);
			
			if(userToLogin) {
				let isOkThePassword = bcryptjs.compareSync(req.body.password, userToLogin.password);
				if (isOkThePassword) {
					delete userToLogin.password;
					req.session.userLogged = userToLogin;
			
					return res.render('userList', { user: userToLogin, user: usuarios}); 
	
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
		
		res.render('userDetail');
	},
	deleteUser: (req,res) => {
		let userDelete = req.params.idUser;
		let nuevosUsuarios = usuarios.filter( u => u.id != userDelete);
		let baseActualizada = JSON.stringify(nuevosUsuarios, null, 2);
		fs.writeFileSync(pathToUsers, baseActualizada);
		res.redirect('/');
	}
}
module.exports = usersController;
