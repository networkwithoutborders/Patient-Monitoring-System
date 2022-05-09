const {Pool} = require('pg');

const pool = new Pool({
    user: process.env.POSTGRES_USER,
    host: process.env.POSTGRES_HOST,
    database: process.env.POSTGRES_DATABASE,
    password: process.env.POSTGRES_PASSWORD,
    port: process.env.POSTGRES_PORT,
    // ssl: {
    //     rejectUnauthorized: false
    // }
});

pool.query('select now()', (err, res) => {
    tables();
    console.log('Database Started Successfully!!');
});


function tables(){

    // For storing the type of users such as doctor, pramedic, etc.
    pool.query(`create table if not exists user_types(
        type_id serial primary key,
        type varchar(20));`);

    // For employee table
    pool.query(`create table if not exists employee(
        id serial primary key,
        first_name varchar(20),
        last_name varchar(20),
        email varchar(120),
        password varchar(128),
        user_type int,
        gender varchar(1),
        constraint fk_user_type foreign key(user_type) references
        user_types(type_id));`);

}

module.exports = pool