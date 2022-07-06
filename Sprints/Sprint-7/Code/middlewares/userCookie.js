const User = require('../models/User');// se requiere models

function recordarUsuario(req,res,next) {
    next();
    if(req.cookies.user != undefined && req.session.userLogged == undefined ){
      const findUser =  User.findByField('email', req.cookies.user)
      req.session.userLogged = findUser;
      const userToLoggin = req.session.userLogged;  
    }
}
module.exports = recordarUsuario;