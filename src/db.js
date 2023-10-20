// Pool permite crear una conexion 
const { Pool } = require('pg');
const { db } = require('./config');
// Esto me devuelve un objeto de conexion que me permitirá hacer consultas 
const pool = new Pool({
    user: db.user,
    password: db.password,
    host: db.host,
    port: db.port,
    database: db.database,
}); 

module.exports = pool;