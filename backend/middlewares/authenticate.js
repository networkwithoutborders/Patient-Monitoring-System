const asyncHandler = require('express-async-handler');
const jwt = require('jsonwebtoken');

const accessTokenKey = process.env.ACCESS_TOKEN_KEY;


/**
 * req.key will contain =>
 * user_id => to denote which user has sent the request
 * user_type => to denote the type of user who has sent the request
 */

authHandler = async (req, res, next) =>{
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if(token == null) return next(new Error(401));
    
    jwt.verify(token, accessTokenKey, (err, key) => {
        if (err) return next(new Error(401));
        console.log(key)
        req.key = key;
        next();
    });
};

module.exports = authHandler;