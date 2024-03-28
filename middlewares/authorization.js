const jwt=require('jsonwebtoken');


exports.authorization = (req, res, next) =>{
    console.log('xcxcfg');
    const token = req.cookies.access_token;
    console.log(token);

    if(!token){
        console.log('Has no token');
        res.redirect('/hello');
    }
    else{
        try{
            const data = jwt.verify(token, 'hii');
            req.email = data.email;
            next();
        }
        catch{
            // return res.sendStatus(403);
        }
    }
}