var express = require('express');
var path = require('path');
var favicon = require('static-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('cookie-session');
var methodOverride = require('method-override');

var routes = require('./routes/index');
var users = require('./routes/users');
var createwidget = require('./routes/createwidget');
var addusername = require('./routes/addusername');
var weightroute = require('./routes/weight');
var deleteweightroute = require('./routes/deleteweight');
var resetroute = require('./routes/resetsession');
var setupdeleteroute = require('./routes/setupdeleteweight');

var weighttestroute = require('./routes/weighttest');

//add mongo dependencies
var weightmongo = require('./routes/weight-mongo');

var weightoracle = require('./routes/weight-oracle');

var mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1/WeightDB');

mongoose.connection.on('open', function() {
	console.log('Connected to Mongoose...');
});


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(favicon());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(methodOverride());
app.use(cookieParser());
app.use(require('stylus').middleware(path.join(__dirname, 'public')));
app.use(session({keys: ['key1', 'key2']}));

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);
app.use('/widgets', createwidget);
app.use('/', addusername);
app.use('/', weightroute);
app.use('/', deleteweightroute);
app.use('/', resetroute);
app.use('/', setupdeleteroute);

app.use('/', weightmongo);
app.use('/', weightoracle);

//app.use('/', weighttestroute);



/// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Request Not Found');
    err.status = 404;
    next(err);
});




/// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
    	console.log('env = development')
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
	console.log('env = production');
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


module.exports = app;
