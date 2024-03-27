function loginRed(req, res, next){
    res.redirect(302, '/hello');
}


module.exports = {loginRed};