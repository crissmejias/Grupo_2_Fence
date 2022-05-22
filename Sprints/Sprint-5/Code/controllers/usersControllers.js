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
	}

}
module.exports = usersController;