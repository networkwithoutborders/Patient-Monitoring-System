const express = require('express')
const bcrypt = require('bcryptjs')
const Employee = require('../../models/Employee')
const EmployeeRepo = require('../../repository/employee_repo')
const asyncHandler = require('express-async-handler')
const {DUPLICATE_ENTRY, DUPLICATE_EMAIL, DUPLICATE_ID} = require('../../utils/const')


// @desc Register Employee
// @route POST api/Employee/
// @access Public

const registerEmployee = asyncHandler(async (req, res, next) =>{
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
       return next(new Error(400));
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
// @route POST api/Employee/login
// @access Public

const loginEmployee = asyncHandler(async (req, res, next) =>{

    const {id, password} = req.body;

    const employee = await EmployeeRepo.findEmployee(id);

    if(employee && (await bcrypt.compare(password, employee.password))){
        res.json({
            id: employee.id,
            user_type: employee.userType,
            name: employee.firstName
        });
    } else{
        next(new Error(400));
    }

});

module.exports = {
    registerEmployee,
    loginEmployee
};
