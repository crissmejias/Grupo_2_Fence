const bcryptjs = require('bcryptjs');
const {
	validationResult
} = require('express-validator');// para poder implementar validación en el CRUd de usuarios
const fs = require('fs');
const usersController = {
	userList: (req,res)=>{
		res.render("userList");
	},
	profile: (req,res)=>{
		res.render('userDetail');
	}

}
module.exports = usersController;