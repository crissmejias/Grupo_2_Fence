function guestMiddleware(req, res, next) {
	if (req.session.userLogged) {
		return res.redirect('/userDetail');
	}
	next();
}

module.exports = guestMiddleware;