const {Pool} = require('pg');

const pool = new Pool({
    connectionString: 'postgres://kllrkkezarzemy:af442b80eb771a290ce3f5c800d53cf56d791085452e20bb9dcb4181330fc981@ec2-52-86-115-245.compute-1.amazonaws.com:5432/dc8403sddc5bvr',
    ssl: {
        rejectUnauthorized: false
    }
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

    const res = await pool.query(`select count(*) from user_types`)
    if(res.rows[0].count == 0){
        pool.query(`insert into user_types(type) values
        ('doctor'),
        ('paramedic'),
        ('nurse'),
        ('emt'),
        ('mod')`)
    };

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