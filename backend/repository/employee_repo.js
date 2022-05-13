const db = require('../database/postgres');
const { DUPLICATE_ENTRY, DUPLICATE_EMAIL, DUPLICATE_ID } = require('../utils/const');

const EmployeeRepo = {}

/*
    Different types of Employee suppported =>
    1) doctor
    2) paramedic
    3) nurse
    4) emt
    5) mod
*/

EmployeeRepo.registerEmployee = async function(employee){
    const res = await db.query(`insert into employee(uid, first_name, last_name, gender, email, password, user_type)
    select $1, $2, $3, $4, $5, $6, type_id from user_types where type = $7 ;`, 
    [employee.uid, employee.firstName, employee.lastName, employee.gender,
    employee.email, employee.password, employee.userType]);
    if(!res.rowCount) throw new Error('Invalid user_type')
        
}

EmployeeRepo.employeeExists = async function(uid, email){
    const res = await db.query('select * from employee where uid = $1 or email = $2;', [uid, email]);
    if(res.rowCount == 0){
        return null;
    }else{
        if(uid == res.rows[0].uid && email == res.rows[0].email){
            return DUPLICATE_ENTRY;
        } else if (email == res.rows[0].email){
            return DUPLICATE_EMAIL;
        } else {
            return DUPLICATE_ID;
        }
    }
}

EmployeeRepo.findEmployee = async function(uid){
    const res = await db.query(`select uid, first_name, password, type
     from employee 
     join user_types on user_type = type_id where uid = $1`, [uid]);
    if(res.rowCount == 0) return null
    const u = res.rows[0];
    return {
        id: u.id,
        firstName: u.first_name,
        password: u.password,
        userType: u.type,
    };
   
}


module.exports = EmployeeRepo;