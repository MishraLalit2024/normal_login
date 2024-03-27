const { login } = require("../middlewares/sqlMaker");

function loginRed(req, res){
    res.render('login');
}

function emailCheck(req, res){
    console.log(req.body);
    console.log("Login data uploaded");
    login(req, res);
}



module.exports = {loginRed, emailCheck};