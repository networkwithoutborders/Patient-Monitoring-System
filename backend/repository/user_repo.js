const db = require('../database/postgres')
const User = require('../models/Users')

const UserRepo = {}
    
UserRepo.registerUser = async function(user){
        await db.query(`insert into users(id, first_name, last_name, gender, email, password, designation)
        values($1, $2, $3, $4, $5, $6, $7)`, [user.id, user.firstName, user.lastName, user.gender, user.email,
        user.password, user.designation])
            
    }

UserRepo.userExists = async function(email){
        const res = await db.query('select * from users where email = $1;', [email])
        return !(res.rowCount == 0)
    
    }

UserRepo.findUser = async function(email){
    const res = await db.query('select * from users where email = $1', [email])
    const u = res.rows[0]
    return setUser(u)
   
}

const setUser = function(u){
    return new User(
        id = u.id,
        first_name = u.first_name,
        last_name = u.last_name,
        gender = u.gender,
        email = u.email,
        password = u.password,
        desgination = u.desgination
    )
}


module.exports = UserRepo