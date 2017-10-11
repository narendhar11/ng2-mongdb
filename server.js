var express = require("express");
var bodyParser = require('body-parser');
var path = require('path');

var app = express();
var port = process.env.PORT || 3000;

//app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');


app.use('/node_modules',express.static(path.join(__dirname,'client/node_modules')) );
app.use(express.static(path.join(__dirname, 'client/src')))

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));

// Catch all other routes and return the index file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
  });

//var homeurl = require('./server/routers/index');
//app.use('/', homeurl);

var apiurl = require('./server/routers/api');
app.use('/api', apiurl);

app.listen(port, function(){
    console.log('server is running on '+port+'....')
})
