const userGuest = (req,res,next) => {
    if(req.session.userLogged.categoria == 'Guest'){
        res.redirect('/products')
    }
    else{
    next()
    }
}
module.exports = userGuest;