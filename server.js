const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const app = express();
const port = 9900;

app.set('view engine', 'ejs');
app.use(cookieParser())
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));
app.use(require('./routes/router'));

app.listen(port, () => {
    console.log(`Server started on port: ${port}`);
});