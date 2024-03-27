const express          = require('express');
const demo             = require('../controllers/demo');
const home             = require('../controllers/home');
const register         = require('../controllers/register');
const { sqlMaker }     = require('../middlewares/sqlMaker');
const { passwdMaker }  = require('../middlewares/sqlMaker')
const active           = require('../controllers/active');
const { loginRed }     = require('../controllers/login');
const router           = express.Router();


router.get('/', home);

router.get('/register', register);

router.get('/allData', demo);

router.post('/postReg', sqlMaker);

router.get('/activate', active);

router.post('/postPas', passwdMaker, loginRed);

router.get('/hello', (req, res)=>{
    res.render('login');
});

router.post('/checkEmail', (req, res)=>{
    console.log("Email is verified");
})



router.get('*', home);



module.exports = router;