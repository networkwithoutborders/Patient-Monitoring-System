const express = require('express')
const bcrypt = require('bcryptjs')
const Employee = require('../../models/Employee')
const EmployeeRepo = require('../../repository/employee_repo')
const asyncHandler = require('express-async-handler')
const tokenGen = require('./tokens')
const {DUPLICATE_ENTRY, DUPLICATE_EMAIL, DUPLICATE_ID} = require('../../utils/const')


// @desc Register Employee
// @route POST auth/register
// @access Public

const registerEmployee = asyncHandler(async (req, res) =>{
    const employee = new Employee(
        req.body.id,
        req.body.firstName,
        req.body.lastName, 
        req.body.gender,
        req.body.email,
        req.body.password,
        req.body.user_type
    );
    
    if(!employee.isValid()){
       throw new Error(400);
    }

    const st = await EmployeeRepo.employeeExists(employee.id,employee.email);
    if(st != 0){
        switch(st){
            case 'id_email':
                throw new Error(DUPLICATE_ENTRY);
            case 'id':
                throw new Error(DUPLICATE_ID);
            case 'email':
                throw new Error(DUPLICATE_EMAIL);
        }
    }

    //Hash password
    const salt = await bcrypt.genSalt(10);
    employee.password = await bcrypt.hash(employee.password, salt);

    await EmployeeRepo.registerEmployee(employee);

    res.status(200).json({
        'msg': 'Successfully registered'
    });
    
});
 
// @desc Authenticate a Employee
// @route POST auth/login
// @access Public

const loginEmployee = asyncHandler(async (req, res) =>{

    const {id, password} = req.body;

    const employee = await EmployeeRepo.findEmployee(id);

    const payload = {
        user_id: employee.id,
        user_type: employee.userType,
    }

    if(employee && (await bcrypt.compare(password, employee.password))){
        res.json({
            id: employee.id,
            user_type: employee.userType,
            name: employee.firstName,
            access_token: await tokenGen.generateAcessToken(payload),
            refresh_token: await tokenGen.generateRefreshToken(payload)
        });
    } else{
        throw new Error(400);
    }


});

module.exports = {
    registerEmployee,
    loginEmployee
};
