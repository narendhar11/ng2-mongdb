var express = require("express");
var bodyParser = require('body-parser');
var path = require('path');

var app = express();
var port = process.env.PORT || 3000;

//app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use('/',express.static('client/dist'));

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));



var apiurl = require('./server/routers/api');
app.use('/api', apiurl);

app.listen(port, function(){
    console.log('server is running on '+port+'....')
});
