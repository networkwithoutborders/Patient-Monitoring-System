const db = require('../database/postgres')
const Employee = require('../models/Employee')

const EmployeeRepo = {}

/*
    Different types of Employee suppported =>
    1) doctor
    2) paramedic
    3) nurse
    4) emt
    5) mod
*/

EmployeeRepo.registerEmployee = async function(Employee){
    const res = await db.query(`insert into employee(id, first_name, last_name, gender, email, password, user_type)
    select $1, $2, $3, $4, $5, $6, type_id from user_types where type = $7 ;`, 
    [Employee.id, Employee.firstName, Employee.lastName, Employee.gender,
    Employee.email, Employee.password, Employee.userType]);
    if(!res.rowCount) throw new Error('Invalid user_type')
        
}

EmployeeRepo.employeeExists = async function(id, email){
    const res = await db.query('select * from employee where id = $1 or email = $2;', [id, email]);
    if(res.rowCount == 0){
        return '';
    }else{
        if(id == res.rows[0].id && email == res.rows[0].email){
            return 'id_email';
        } else if (email == res.rows[0].email){
            return 'email';
        } else {
            return 'id';
        }
    }
}

EmployeeRepo.findEmployee = async function(id){
    const res = await db.query(`select id, first_name, password, type
     from employee 
     join user_types on user_type = type_id where id = $1`, [id]);
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