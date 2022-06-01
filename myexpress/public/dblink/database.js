var mysql = require('mysql');
var pool = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: '123456',
    database: 'js'
});

module.exports = {
    pool
}