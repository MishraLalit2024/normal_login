const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 9900;

app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public'));
app.use(require('./routes/router'));

app.listen(port, () => {
    console.log(`Server started on port: ${port}`);
});