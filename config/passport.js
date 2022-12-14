const passport = require("passport");
const BearerStratey = require("passport-http-bearer").Strategy;
const User = require("../models/users");
const jwt = require("jsonwebtoken");
const secret = require("../config/secret");

// passport verififcation
passport.use(
	new BearerStratey(function (token, done) {
		const body = jwt.decode(token, { secret });
		User.findOne({ where: { username: body.user } })
			.then(function (user) {
				if (!user) {
					return done(null, false, { error: { JWT: "invalid" } });
				}

				return done(null, user);
			})
			.catch(done);
	})
);
module.exports = passport;
