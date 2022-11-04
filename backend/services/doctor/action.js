const asyncHandler = require('express-async-handler');
const { OpdSearch } = require('../../models/Doctor');
const DoctorRepo = require('../../repository/doctor_repo');
const EmployeeRepo = require('../../repository/employee_repo');

// Constant default value for paging data
const PAGE_SIZE = 30;

const opdSearch = asyncHandler(async (req, res) => {
    let { page, pageSize } = req.query;

    if(!page || !pageSize){
        page = 1;
        pageSize = PAGE_SIZE;
    }

    const { uid } = req.key;

    const opdSearch = new OpdSearch(
        from = req.body.from,
        to = req.body.to,
        patientUid = req.body.patient_uid,
        ipNo = req.body.ip_no,
        department = req.body.department,
        uid,
    );

    const list = await DoctorRepo.opdSearch(opdSearch, page, pageSize);
    
    res.send(list);
});


module.exports = {
    opdSearch,
};