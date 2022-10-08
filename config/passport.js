const passport = require('passport');
const LocalStratey = require('passport-local').Strategy;
const User = require('../models/users');

passport.use(new LocalStratey({
    usernameField: 'email',
    passwordField:'userpass',

}, function(email,password,done){
    User.findOne({where:{email:email}}).then(function(user){
        if(!user || !User.validatePassword(password)){
            return done(null,false,{errors: {'email o contraseña': 'equivocados'}})
        }
        return done(null,user);
    }).catch(done);
}

));
module.exports = passport;
