import mysql from 'mysql2'

const pool=mysql.createPool({
    host:'12.0.0.1',
    port:3306,
    database:'test',
    user:'root',
    password:'admin123'
})
export default pool.promise()