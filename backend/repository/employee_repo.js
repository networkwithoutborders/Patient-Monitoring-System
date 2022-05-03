const db = require('../database/postgres')
const Employee = require('../models/Employee')

const EmployeeRepo = {}
    
EmployeeRepo.registerEmployee = async function(Employee){
        await db.query(`insert into employee(id, first_name, last_name, gender, email, password, designation)
        values($1, $2, $3, $4, $5, $6, $7)`, [Employee.id, Employee.firstName, Employee.lastName, Employee.gender, Employee.email,
        Employee.password, Employee.designation]);
            
    }

EmployeeRepo.employeeExists = async function(id, email){
        const res = await db.query('select * from employee where id = $1 or email = $2;', [id, email])
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
    const res = await db.query('select * from employee where id = $1', [id]);
    if(res.rowCount == 0) return null
    const u = res.rows[0];
    return setEmployee(u);
   
}

const setEmployee = function(u){
    return new Employee(
        id = u.id,
        first_name = u.first_name,
        last_name = u.last_name,
        gender = u.gender,
        email = u.email,
        password = u.password,
        designation = u.designation
    );
}


module.exports = EmployeeRepo;