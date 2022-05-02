const {Pool} = require('pg')

const pool = new Pool({
    user: process.env.POSTGRES_USER,
    host: process.env.POSTGRES_HOST,
    database: process.env.POSTGRES_DATABASE,
    password: process.env.POSTGRES_PASSWORD,
    port: process.env.POSTGRES_PORT,
    ssl: {
        rejectUnauthorized: false
    }
})

pool.query('select now()', (err, res) => {
    tables()
    console.log('Database Started Successfully!!')
})


function tables(){
    pool.query(`create table if not exists users(
        id serial primary key,
        first_name varchar(20),
        last_name varchar(20),
        email varchar(120),
        password varchar(128),
        designation varchar(15),
        gender varchar(1));
        `)
}

module.exports = pool