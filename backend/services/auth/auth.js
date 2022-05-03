const express = require('express')
const bcrypt = require('bcryptjs')
const User = require('../../models/Users')
const UserRepo = require('../../repository/user_repo')
const asyncHandler = require('express-async-handler')
const errorConstants = require('../../utils/const')


// @desc Register User
// @route POST api/user/
// @access Public

const registerUser = asyncHandler(async (req, res, next) =>{
    const user = new User(
        req.body.id,
        req.body.firstName,
        req.body.lastName, 
        req.body.gender,
        req.body.email,
        req.body.password,
        req.body.designation
    )

    if(!user.isValid()){
       return next(new Error(400))
    }
        
    if(await UserRepo.userExists(user.email)){
        return next(new Error(errorConstants.DUPLICATE_ENTRY))
    }

    //Hash password
    const salt = await bcrypt.genSalt(10)
    user.password = await bcrypt.hash(user.password, salt)

    await UserRepo.registerUser(user)

    res.status(200).json({
        'msg': 'Successfully registered'
    })
    
})
 
// @desc Authenticate a user
// @route POST api/user/login
// @access Public

const loginUser = asyncHandler(async (req, res, next) =>{

    // const {email, password} = req.body
    const {id, password} = req.body

    const user = await UserRepo.findUser(id)

    if(user && (await bcrypt.compare(password, user.password))){
        res.json({
            _id: user.id,
            desgination: user.designation,
           msg: `Welcome ${user.firstName}`
        })
    } else{
        next(new Error(400))
    }

})

module.exports = {
    registerUser,
    loginUser
}
