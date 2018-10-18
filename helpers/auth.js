module.exports = {
	ensureAuthenticated: function (req, res, next) {
		if(req.isAuthenticated()){
			return next();
		}
		res.redirect('/');
	},
	ensureGuest: function (req, res, next) {
		if(!req.isAuthenticated()){
			return next();
		}
		res.redirect('/auth/google');
	},
	ensureAdmin: function (req, res, next) {
		if(req.isAuthenticated() && req.user.role === 'admin'){
			return next();
		}
		res.redirect('/');
	}
}
