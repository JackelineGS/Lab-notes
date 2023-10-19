// Pool permite crear una conexion 
const {Pool} = require('pg')

// Esto me devuelve un objeto de conexion que me permitirá hacer consultas 
const pool = new Pool({
    user:'postgres',
    password: '678@#post',
    host: 'localhost',
    port: 5423,
    database: 'tasksdb'
})

module.exports = pool 