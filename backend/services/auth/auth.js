const bcrypt = require('bcryptjs');
const Employee = require('../../models/Employee');
const EmployeeRepo = require('../../repository/employee_repo');
const asyncHandler = require('express-async-handler');
const tokenGen = require('./tokens');


// @desc Register Employee
// @route POST auth/register
// @access Public

const registerEmployee = asyncHandler(async (req, res) =>{

    let contacts = req.body.contacts;
    const employee = new Employee(
        req.body.uid,
        req.body.first_name,
        req.body.last_name, 
        req.body.gender,
        req.body.email,
        req.body.password,
        req.body.user_type,
        contacts.primary_contact,
        contacts.secondary_contact,
        req.body.description,
    );
    
    if(!employee.isValid()){
       throw new Error(400);
    }

    const st = await EmployeeRepo.employeeExists(employee.uid,employee.email);
    if(st){
        res.status(400).send({msg: st});
        return;
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

    const { uid, password, user_type} = req.body;
    
    const employee = await EmployeeRepo.findEmployee(uid);

    if(!employee || user_type != employee.userType){
        throw new Error(400);
    }
    
    const payload = {
        uid: employee.uid,
        user_type: employee.userType,
    };

    if (await bcrypt.compare(password, employee.password)){
        res.json({
            uid: employee.uid,
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
