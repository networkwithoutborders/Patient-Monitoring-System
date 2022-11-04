const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler');

const accessTokenKey = process.env.ACCESS_TOKEN_KEY;
const refreshTokenKey = process.env.REFRESH_TOKEN_KEY;

/*
    Access token refershes at an interval of 30 min
*/
async function generateAcessToken(payload){
    console.log(accessTokenKey)
    const token = await jwt.sign(payload, accessTokenKey, {
        algorithm: 'HS256',
        // @TODO - Add this in production stage for security
        // expiresIn: '30m'
    });

    return token;
}

/*
 Refersh token has vailidity upto lifetime (Subjected to changes)
*/
async function generateRefreshToken(payload){
    const token = await jwt.sign(payload, refreshTokenKey, {
        algorithm: 'HS256',
    });

    return token;
}

const generateNewTokens = asyncHandler(async (req, res)=>{
    const authHeader =  req.headers['authorization']
    const refreshToken = authHeader && authHeader.split(' ')[1]
    if(!refreshToken){
        throw new Error(401);
    }

    try {
        const payload = await jwt.verify(refreshToken, refreshTokenKey) 
        res.send({
            access_token: await generateAcessToken(payload),
            refresh_token: await generateRefreshToken(payload),
        });

    } catch(e){
        throw new Error(401);
    }

});


module.exports = {
    generateAcessToken,
    generateRefreshToken,
    generateNewTokens
};