var mysql = require('mysql');

var con = mysql.createConnection({
    host                : 'localhost',
    user                : 'root',
    password            : 'password',
    database            : 'saas_nodejs',
    dateStrings         : true,
    multipleStatements  : true
});

con.connect(function(err) {
    if (err) throw err;
    console.log('Connected to the database!');
});


module.exports = con;