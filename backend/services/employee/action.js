const asyncHandler = require('express-async-handler');
const EmployeeRepo = require('../../repository/employee_repo');


const listPatients = asyncHandler(async (req, res) =>{
    const { uid } = req.key;

    const patients = await EmployeeRepo.listPatients(uid)

    res.send(patients);
});

module.exports = {
    listPatients,
};

