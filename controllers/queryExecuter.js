const con = require('../con/db');

function regUser(req, res, sql){
    data1 = sql.split(",");
    data2 = data1[9].split(`'`);

    con.query(sql, (err, data)=>{
        if (err) throw err;

        if(data.message == ''){
            console.log("Data inserted successfully.");
            res.json({
                data: data2[1]
            })
        }
    })
}

function pasUser(req, res, sql){
    con.query(sql, (err, data)=> {
        if(err) throw err;

        if(data.message==''){
            console.log("Password set successfully");
        }
    })
}


module.exports = {regUser, pasUser};