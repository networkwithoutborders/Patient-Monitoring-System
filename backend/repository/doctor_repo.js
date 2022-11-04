const db = require('../database/postgres');


const DoctorRepo = {};

DoctorRepo.opdSearch = async function(opdSearch, page, pageSize){

    const queryParams = [opdSearch.doctorUid, (page-1)*pageSize, pageSize];

    let query = `select patient.uid, name, age, patient.gender, status,
        concat(first_name, ' ', last_name) 
        from patient
        join employee on employee.uid = patient.employee_uid
        where employee_uid = $1 `
    
    if(opdSearch.from){
        queryParams.push(opdSearch.from);
        query += ` and visit_time > $` + queryParams.length;
    }    

    if(opdSearch.to){
        queryParams.push(opdSearch.to);
        query += ` and visit_time < $` + queryParams.length;
    }

    if(opdSearch.patientUid){
        queryParams.push(opdSearch.patientUid);
        query += ` and patient.uid = $` + queryParams.length;
    }
        
    query += `order by visit_time desc offset $2 limit $3`;

    const res = await db.query(query, queryParams);

    return res.rows;

};

module.exports = DoctorRepo;