const express          = require('express');
const demo             = require('../controllers/demo');
const home             = require('../controllers/home');
const register         = require('../controllers/register');
const { sqlMaker, passwdMaker }     = require('../middlewares/sqlMaker');
const active           = require('../controllers/active');
const { loginRed, emailCheck }     = require('../controllers/login');
const router           = express.Router();


router.get('/', home);

router.get('/register', register);

router.get('/allData', demo);

router.post('/postReg', sqlMaker);

router.get('/activate', active);

router.post('/postPas', passwdMaker);

router.get('/hello', loginRed);

router.post('/checkEmail', emailCheck)



router.get('*', home);



module.exports = router;