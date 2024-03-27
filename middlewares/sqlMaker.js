const md5           = require("md5");
const {regUser}     = require("../controllers/queryExecuter");
const {pasUser}     = require("../controllers/queryExecuter");

function sqlMaker(req, res, next){
    const obj = req.body;
    console.log(obj);
    let seed = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789';
    let actCode = ``;
    for(let i=0; i<10; i++){
        actCode += `${seed[Math.floor(Math.random()*10)]}`
    }

    sql = `INSERT INTO users_master(fname, lname, email, phone, act_code, rec_stat) VALUES(`;
    Object.keys(obj).forEach(el => {
        sql += `'${obj[el]}', `;
    });
    sql += `'${actCode}', `;
    sql += `'1')`;

    console.log(sql);
    regUser(req, res, sql);
}


function passwdMaker(req, res, next) {
    const obj = req.body;
    console.log(obj);
    salt = Math.floor(Math.random()*10000);

    paswd = md5(obj.pwd+salt)
    email = obj.email;
    sql = `UPDATE users_master SET salt='${salt}', pwd = '${paswd}' WHERE email='${email}'`

    console.log(sql);
    pasUser(req, res, sql);

    next();
}


module.exports = {sqlMaker, passwdMaker};