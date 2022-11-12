const secret = require("./secret");
const { expressjwt } = require("express-jwt");

// Get Token from Header
function getTokenFromHeader(req) {
	if (
		req.headers.authorization &&
		req.headers.authorization.split(" ")[0] == "Bearer"
	) {
		return req.headers.authorization.split(" ")[1];
	}
}

// Verify Token
const auth = {
	// if the user is logged in
	required: function (req, res, next) {
		if (!req.auth) {
			return res
				.status(401)
				.json({ Error: "Hi please login to access this info" });
		}
		// if admin
		if (req.auth.role == 1) {
			return next();
		}
		// if not requested user
		if (req.auth.id != req.params.id) {
			return res.status(401).json({
				// send auth id and params id
				Error: "You are not authorized to access this info",
			});
		}
		next();
	},
	isAdmin: function (req, res, next) {
		if (!req.auth) {
			return res
				.status(401)
				.json({ Error: "Hi please login to access this info" });
		}
		if (req.auth.role !== 1) {
			return res
				.status(403)
				.json({ Error: "You are not an admin, can't access this info" });
			Z;
		}
		next();
	},
	isEditor: function (req, res, next) {
		if (!req.auth) {
			return res
				.status(401)
				.json({ Error: "Hi please login to access this info" });
		}
		if (req.auth.role == 1) {
			return next();
		}
		if (req.auth.role !== 3) {
			return res.status(403).json({
				Error: "You are not an editor, can't access this info",
			});
		}
		next();
	},
	isUser: function (req, res, next) {
		if (!req.auth) {
			return res
				.status(401)
				.json({ Error: "Hi please login to access this info" });
		}
		if (req.auth.role !== 2 || req.auth.role) {
			return res
				.status(403)
				.json({ Error: "You are not an user, can't access this info" });
		}
		next();
	},
	optional: expressjwt({
		secret: secret,
		algorithms: ["HS256"],
		userProperty: "user",
		credentialsRequired: false,
		getToken: getTokenFromHeader,
	}),
};

module.exports = auth;
