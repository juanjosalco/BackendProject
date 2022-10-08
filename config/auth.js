const secret = require('./secret');
const {expressjwt} = require('express-jwt');

function getTokenFromHeader(req) {
    if (req.headers.authorization && req.headers.authorization.split(' ')[0] == 'Bearer') {
        return req.headers.authorization.split(' ')[1]
    }
}

const auth = {
    required: function(req,res,next){
        if(!req.auth) {
            
            return res.status(401).json({"Error" :"Credentials not founded"});
        }
        if (!req.user || !req.auth.user){
            console.log ('NOT pass double verification')
            return next();
        }
        next();
    }
    ,
    isAdmin: function (req, res, next) {
        
        if(!req.auth) {
            
            return res.status(401).json({"Error" :"Credentials not founded"});
        }
        if (req.auth.role !== 'admin') {
            return res.status(403).json({"Error":"You are not an admin, can't access this info"});
        }
        //console.log(req.auth)
        next();
    },
    optional: expressjwt({
        secret: secret,
        algorithms: ['HS256'],
        userProperty: 'user',
        credentialsRequired: false,
        getToken: getTokenFromHeader
    })
}

module.exports = auth;