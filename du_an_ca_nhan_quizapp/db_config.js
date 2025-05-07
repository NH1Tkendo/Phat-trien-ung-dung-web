'use strict'

const sql = require('mssql')

const config = {
    user: 'sa',
    password: '1',
    server: '10.10.66.71',
    port: 1433,
    database: 'QuizApp_DB',
    options: {
        trustServerCertificate: true, // dùng nếu là local
        enableArithAbort: true
    }
};

async function connect() {
    try{
        const pool = await sql.connect(config);
        console.log("Ket noi thanh cong");
        return pool;
    }catch(err){
        console.error("Loi ket noi:", err);
        throw err;
    }
}   


module.exports = {
    connect,
    sql
}