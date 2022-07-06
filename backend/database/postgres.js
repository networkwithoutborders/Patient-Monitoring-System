const {Pool} = require('pg');

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    // ssl: {
    //     rejectUnauthorized: false
    // }
});

pool.query('select now()', (err, res) => {
    tables();
    console.log('Database Connected Successfully!!');
});


async function tables(){

    // For storing the type of users such as doctor, pramedic, etc.
    await pool.query(`create table if not exists user_types(
        type_id serial primary key,
        type varchar(20));`);

    let res = await pool.query(`select count(*) from user_types`)
    if(res.rows[0].count == 0){
        pool.query(`insert into user_types(type) values
        ('doctor'),
        ('paramedic'),
        ('nurse'),
        ('emt'),
        ('mod')`)
    };

    // For employee table
    await pool.query(`create table if not exists employee(
        uid serial primary key,
        first_name varchar(20),
        last_name varchar(20),
        email varchar(120),
        password varchar(128),
        user_type int,
        gender varchar(1),
        primary_contact int,
        secondary_contact int,
        description varchar(20),
        constraint fk_user_type foreign key(user_type) references
        user_types(type_id));`);
     
    await pool.query(`create table if not exists id_types(
        id serial primary key, 
        type varchar(20));`);

    res = await pool.query(`select count(*) from id_types`)
    if(res.rows[0].count == 0){
        pool.query(`insert into id_types(type) values
        ('phone_number'),
        ('adhar_number'),
        ('driving_license'),
        ('pan')`)
    };

    try{
        await pool.query(`create sequence patient_seq start with 1000;`);
    }catch(e){}

    await pool.query(`create table if not exists patient(
        uid text primary key default 'PID'||nextval('patient_seq'::regclass), 
        employee_uid int, 
        name varchar(50), 
        age int, 
        gender varchar(1), 
        avpu varchar(30),
        severity varchar(10),
        status varchar(30),
        visit_time timestamp without time zone 
        default (now() at time zone 'utc'), 
        constraint fk_employee_uid foreign key(employee_uid) 
        references employee(uid));`);

    await pool.query(`create table if not exists patient_id(
        patient_uid text, 
        id_value varchar(50), 
        id_type int, 
        constraint fk_patient_uid 
        foreign key(patient_uid) references patient(uid), 
        constraint fk_id_type foreign key (id_type) references id_types(id));`);
  
    await pool.query(`create table if not exists patient_vitals(
        patient_uid text, 
        bp float4, 
        temperature float4, 
        pulse float4, 
        pain float4, 
        respiratory_rate float4, 
        cbg float4, 
        spo2 float4, 
        constraint fk_patient_uid foreign key (patient_uid) references patient(uid));`);

}

module.exports = pool