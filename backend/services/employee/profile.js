const asyncHandler = require('express-async-handler');
const EmployeeRepo = require('../../repository/employee_repo');

// We are using url parameters, so hyperlinks can be created

const findProfile = asyncHandler(async (req, res) => {
    const uid = req.params.p;
    const employee = await EmployeeRepo.findProfile(uid);

    res.send({
        first_name: employee.firstName,
        last_name: employee.lastName,
        gender: employee.gender,
        email: employee.email,
        user_type: employee.userType,
        contacts: {
            primary_contact: employee.primaryContact,
            secondary_contact: employee.secondaryContact
        }
    });
});

module.exports = {
    findProfile
};