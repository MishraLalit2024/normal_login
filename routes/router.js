const express          = require('express');
const demo             = require('../controllers/demo');
const router           = express.Router();
const home             = require('../controllers/home');
const register         = require('../controllers/register');
const { sqlMaker, passwdMaker }     = require('../middlewares/sqlMaker');
const active           = require('../controllers/active');
const { loginRed, emailCheck }     = require('../controllers/login');
const cookieParser = require('cookie-parser');
router.use(cookieParser())
const authorization = require('../middlewares/authorization');

router.get('/', home);

router.get('/register', register);

router.get('/allData', demo);

router.post('/postReg', sqlMaker);

router.get('/activate', active);

router.post('/postPas', passwdMaker);

router.get('/hello', loginRed);

router.post('/checkEmail', emailCheck)

router.get('/next', authorization.authorization,(req, res) => {
    // res.json("Login Sucssfully");
    console.log("Reached Here with token");
    res.end();
});


router.get('*', home);



module.exports = router;