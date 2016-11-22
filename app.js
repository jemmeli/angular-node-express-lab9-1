var express = require('express');
var bodyParser = require('body-parser');
var service = require('./service.js');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.get('/', function (req, res) {
    res.send('Hello World!!!!!!!!!');
});

app.use(express.static('./public'));
service.attachService(app);

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});