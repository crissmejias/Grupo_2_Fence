const path = require("path");
const fs = require("fs");
const { parse } = require("path");
const pathToUsers = path.join(__dirname, "../database/users.json");
const usersList = fs.readFileSync(pathToUsers);
const usuarios = JSON.parse(usersList);
const bcryptjs = require('bcryptjs');
const {
	validationResult
} = require('express-validator');// para poder implementar validación en el CRUd de usuarios

const usersController = {
	userList: (req,res)=>{
		res.render("userList");
	},
	profile: (req,res)=>{
		res.render('userDetail');
	},
	register: (req, res) => {    
		res.render("register");
	
	  },
	  recordUser: (req,res)=>{
		let listadoIds = usuarios.map(el=>{return el.id});
		  let maxId = listadoIds.reduce((previous,current)=>{
			return (current > previous) ? current : previous
		  });
		let newUser = {
		  id: maxId +1,
		  nombre : req.body.nombre,
		  apellido: req.body.apellido,
		  email: req.body.email,
		  password: req.body.password,
		  categoria: req.body.categoria,
		  imagen: path.join('/images/users/', req.file.filename) ,
		}
		  console.log(req.file);
		  usuarios.push(newUser);
		  let newData = JSON.stringify(usuarios,null,2);
		  fs.writeFileSync(pathToUsers,newData);
		  res.redirect('/')
		}


}
module.exports = usersController;